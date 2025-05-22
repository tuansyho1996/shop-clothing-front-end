import React, { useContext, } from "react";
import { FormCheckoutContext } from '@/context/context.form.checkout';
import {
  PayPalScriptProvider, PayPalButtons,

} from "@paypal/react-paypal-js";
import { useRouter } from 'next/navigation'
import { AppContext } from "@/context/context.app";

// Renders errors or successfull transactions on the screen.


function App({ setLoading }) {
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    "enable-funding": "venmo",
    'disable-funding': 'card',
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons,card-fields",
    "data-sdk-integration-source": "integrationbuilder",
  }
  const router = useRouter();

  const {
    firstNameRef, lastNameRef,
    addressRef,
    apartmentSuiteRef,
    cityRef,
    stateRef,
    zipRef,
    countryRef,
    phoneRef,
    emailRef,
    setFormErrors, flagCurrentRef, } = useContext(FormCheckoutContext)
  const { subtotaltRef, shippingRef, productsInCartRef, setProductsInCart } = useContext(AppContext)


  const validateForm = () => {
    const errors = {};
    // if (!emailRef.current) errors.email = "Email is required.";
    if (
      !emailRef.current ||
      typeof emailRef.current !== 'string' ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailRef.current)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!firstNameRef.current) errors.firstName = "First name is required.";
    if (!lastNameRef.current) errors.lastName = "Last name is required.";
    if (!countryRef.current) errors.country = "Country is required.";
    if (!addressRef.current) errors.address = "Address is required.";
    if (!apartmentSuiteRef.current) errors.apartmentSuite = "Apartment suite is required.";
    if (!cityRef.current) errors.city = "City is required.";
    if (!stateRef.current) errors.state = "State is required.";
    if (!zipRef.current) errors.zip = "ZIP code is required.";
    if (!/^\+?\d{7,15}$/.test(phoneRef.current.replace(/-/g, ""))) errors.phone = "Please enter a valid phone number";
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };
  const handleCreateOrder = async () => {
    const dynamicBillDetails = {
      givenName: firstNameRef.current,
      surname: lastNameRef.current,
      addressLine1: addressRef.current,
      addressLine2: apartmentSuiteRef.current,
      adminArea2: cityRef.current,
      adminArea1: stateRef.current,
      postalCode: zipRef.current,
      countryCode: flagCurrentRef.current,
      nationalNumber: phoneRef.current,
      emailAddress: emailRef.current,
      itemTotal: subtotaltRef.current,
      shipping: shippingRef.current,
      items: productsInCartRef.current
    };
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/payment/create-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify(dynamicBillDetails),
      });

      const orderData = await response.json();

      if (orderData.metadata.jsonResponse.id) {
        return orderData.metadata.jsonResponse.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      // setMessage(
      //   `Could not initiate PayPal Checkout...${error}`
      // );
    }
    finally {
      setLoading(false); // reset loading
    }
  }
  const completeOrder = async ({ infoOrder, infoCustomer }) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/payment/checkout/order-received`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ infoOrder, infoCustomer, userId: user?._id }),
        }
      );
      const res = await response.json();
      if (res?.status === 201) {
        setProductsInCart([])
        router.push(`/checkout/order-received/${res?.metadata?._id}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <p className="text-2xl font-bold text-gray-800 mb-5">Payment</p>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "paypal",
          }}
          createOrder={handleCreateOrder}
          onApprove={async (data, actions) => {
            const dynamicBillDetails = {
              givenName: firstNameRef.current,
              surname: lastNameRef.current,
              addressLine1: addressRef.current,
              addressLine2: apartmentSuiteRef.current,
              adminArea2: cityRef.current,
              adminArea1: stateRef.current,
              postalCode: zipRef.current,
              countryCode: flagCurrentRef.current,
              nationalNumber: phoneRef.current,
              emailAddress: emailRef.current,
              itemTotal: subtotaltRef.current,
              shipping: shippingRef.current,
              items: productsInCartRef.current
            };
            try {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/payment/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const orderData = await response.json();
              // Three cases to handle:
              //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              //   (2) Other non-recoverable errors -> Show a failure message
              //   (3) Successful transaction -> Show confirmation or thank you message
              let errorDetail = null
              if (orderData.status !== 200) {
                errorDetail = orderData?.metadata?.jsonResponse?.details?.[0];
              }

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
              } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                  `${errorDetail.description} (${orderData?.metadata?.jsonResponse?.debug_id})`
                );
              } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const transaction =
                  orderData?.metadata?.jsonResponse?.purchase_units[0].payments
                    .captures[0];
                // setMessage(
                //   `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                // );
              }
              if (orderData?.metadata?.jsonResponse?.status === "COMPLETED") {
                completeOrder({ infoOrder: orderData?.metadata?.jsonResponse, infoCustomer: dynamicBillDetails })
              }
            } catch (error) {
              console.error(error);
              // setMessage(
              //   `Sorry, your transaction could not be processed...${error}`
              // );
            }
          }
          }
        />
      </PayPalScriptProvider>
    </div>
  );
}


export default App; 