import React, { useState, useContext } from "react";
import { FormCheckoutContext } from '@/context/context.form.checkout';
import {
  PayPalScriptProvider, PayPalButtons,
  usePayPalCardFields,
  PayPalCardFieldsProvider,
  PayPalNameField,
  PayPalNumberField,
  PayPalExpiryField,
  PayPalCVVField,
} from "@paypal/react-paypal-js";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from "@/context/context.app";

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}

function App({ setLoading }) {
  const initialOptions = {
    "client-id": "Ab6m9VdNueWNc2rNn5FNgkkD6_N7aSElP5jfvI69aCVdbFHs8BoQbAS-jKHXmrzgBRGXja_00xeFEf3b",
    "enable-funding": "venmo",
    'disable-funding': '',
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons,card-fields",
    "data-sdk-integration-source": "developer-studio",
  }
  const router = useRouter();

  const [isDebitCard, setIsDebitCard] = useState(false)
  const { firstName,
    lastName, firstNameRef, lastNameRef,
    address, addressRef,
    apartmentSuiteRef,
    city, cityRef,
    state, stateRef,
    zip, zipRef,
    country, countryRef,
    phone, phoneRef,
    email, emailRef,
    formErrors, setFormErrors, flagCurrentRef, } = useContext(FormCheckoutContext)
  const { subtotaltRef, shippingRef, productsInCartRef, user, setProductsInCart } = useContext(AppContext)


  const validateForm = () => {
    const errors = {};
    // if (!emailRef.current) errors.email = "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current)) {
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
    try {
      const response = await fetch("http://localhost:5000/api/payment/create-payment", {
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
  }
  const completeOrder = async ({ infoOrder, infoCustomer }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/payment/checkout/order-received`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ infoOrder, infoCustomer }),
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
  const billDetails = {
    givenName: firstNameRef.current, surname: lastNameRef.current, addressLine1: addressRef.current, addressLine2: apartmentSuiteRef.current, adminArea2: cityRef.current, adminArea1: stateRef.current,
    postalCode: zipRef.current, countryCode: flagCurrentRef.current, nationalNumber: phoneRef.current, emailAddress: emailRef.current,
    itemTotal: subtotaltRef.current, shipping: shippingRef.current, items: productsInCartRef.current
  }
  return (
    <div className="App">
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
                `http://localhost:5000/api/payment/${data.orderID}/capture`,
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
        <button className="flex items-center justify-center w-full button-debit text-white bg-gray-800 rounded-sm hover:bg-gray-700 focus:outline-none"
          onClick={() => setIsDebitCard(true)}
        >
          <span className="ml-2 ">Debit or Credit Card</span>
        </button>
        {
          isDebitCard &&
          <>
            <div className="w-full text-right my-3 ">
              <CloseIcon
                fontSize="large"
                sx={{ color: '#888', cursor: 'pointer' }}
                onClick={() => setIsDebitCard(false)}
              />
            </div>
            <PayPalCardFieldsProvider
              createOrder={handleCreateOrder}
              onApprove={async (data, actions) => {
                try {
                  const response = await fetch(
                    `http://localhost:5000/api/payment/${data.orderID}/capture`,
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
                    // console.log(
                    //   "Capture result",
                    //   orderData?.metadata?.jsonResponse,
                    //   JSON.stringify(orderData?.metadata?.jsonResponse, null, 2)
                    // );
                    if (orderData?.metadata?.jsonResponse?.status === "COMPLETED") {
                      const billDetails = {
                        givenName: firstNameRef.current, surname: lastNameRef.current, addressLine1: addressRef.current, addressLine2: apartmentSuiteRef.current, adminArea2: cityRef.current, adminArea1: stateRef.current,
                        postalCode: zipRef.current, countryCode: flagCurrentRef.current, nationalNumber: phoneRef.current, emailAddress: emailRef.current,
                        itemTotal: subtotaltRef.current, shipping: shippingRef.current, items: productsInCartRef.current
                      }
                      setLoading(false)
                      completeOrder({ infoOrder: orderData?.metadata?.jsonResponse, infoCustomer: billDetails })
                    }
                  }
                } catch (error) {
                  console.error(error);
                  // setMessage(
                  //   `Sorry, your transaction could not be processed...${error}`
                  // );
                }
              }
              }
              style={{
                input: {
                  "font-size": "16px",
                  "font-family": "courier, monospace",
                  "font-weight": "lighter",
                  padding: "0.75rem 1rem",
                  color: "#000",
                  outline: "none !important",           // Remove default outline
                  boxShadow: "none !important"
                },
                ".invalid": {
                  color: "purple",
                },
                ".focused": {
                  outline: "none",            // Remove outline when focused
                },
              }}
            >
              <PayPalNumberField />
              <div className="flex space-x-4">
                {/* Expiry Field */}
                <div className="flex-1">
                  <PayPalExpiryField />
                </div>

                {/* CVV Field */}
                <div className="flex-1">
                  <PayPalCVVField />
                </div>
              </div>

              {/* Custom client component to handle card fields submission */}
              <SubmitPayment billingAddress={billDetails} setIsLoading={setLoading} />
            </PayPalCardFieldsProvider>
          </>
        }
      </PayPalScriptProvider>

    </div>
  );
}

const SubmitPayment = ({ billingAddress, setIsLoading }) => {
  const { cardFieldsForm, fields } = usePayPalCardFields();

  const handleClick = async () => {
    if (!cardFieldsForm) {
      const childErrorMessage =
        "Unable to find any child components in the <PayPalCardFieldsProvider />";
      throw new Error(childErrorMessage);
    }
    const formState = await cardFieldsForm.getState();

    if (!formState.isFormValid) {
      return alert("The payment form is invalid");
    }
    setIsLoading(true)
    cardFieldsForm.submit(billingAddress).catch((err) => {
      setIsLoading(false)
    });
  };

  return (
    <button
      className={`flex items-center justify-center w-full px-4 py-3 text-white bg-sky-600 hover:bg-sky-700 rounded-sm focus:outline-none`}
      style={{ float: "right" }}
      onClick={handleClick}
    >
      Pay
    </button>
  );
};

export default App; 