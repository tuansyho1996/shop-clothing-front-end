import { fetchOrder } from "@/services/service.payment";
export default async function OrderRecieved({ params }) {
  const res = await fetchOrder(params.id)
  const subtotal = res?.order_info_customer?.items.reduce((sum, el) => el.product_price * el.product_count + sum, 0)
  return (
    <div className="container mx-auto p-4 min-h-[50vh]">
      <h2 className="text-2xl font-bold mb-4">Order details</h2>
      {/* Order Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border-b border-gray-300">PRODUCT</th>
                <th className="p-2 border-b border-gray-300 text-right">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {
                res?.order_info_customer?.items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2 border-b">{item.product_name} x {item.product_count} - {item.product_size} - {item.product_color}</td>
                      <td className="p-2 border-b text-right font-bold">${item.product_price}</td>
                    </tr>
                  )
                })
              }
              <tr>
                <td className="p-2">Subtotal:</td>
                <td className="p-2 text-right font-bold">${subtotal}</td>
              </tr>
              <tr>
                <td className="p-2">Shipping:</td>
                <td className="p-2 text-right font-bold">${res?.order_info_customer?.shipping}</td>
              </tr>
              <tr>
                <td className="p-2">Payment method:</td>
                <td className="p-2 text-right min-w-28 ">{res?.order_info?.payment_source?.paypal ? 'Paypala' : 'Credit card'}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Total:</td>
                <td className="p-2 text-right font-bold">${subtotal + res?.order_info_customer?.shipping}</td>
              </tr>
            </tbody>
          </table>

          {/* Address Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Billing address</h3>
              <p>{res?.order_info_customer?.givenName} {res?.order_info_customer?.surname}</p>
              <p>{res?.order_info_customer?.addressLine1}</p>
              <p>{res?.order_info_customer?.addressLine2}</p>
              <p>{res?.order_info_customer?.adminArea2},{res?.order_info_customer?.adminArea1} {res?.order_info_customer?.postalCode}</p>
              <p>{res?.order_info_customer?.countryCode}</p>
              <p>{res?.order_info_customer?.nationalNumber}</p>
              <p>{res?.order_info_customer?.emailAddress}</p>
            </div>
            {/* <div>
              <h3 className="font-bold">Shipping address</h3>
              <p>John Doe</p>
              <p>1st</p>
              <p>ast</p>
              <p>San Jose, AL 22222</p>
              <p>United States (US)</p>
            </div> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 p-4 border border-gray-200">
          <h3 className="text-green-700 font-bold text-lg mb-4">
            Thank you. Your order has been received.
          </h3>
          <ul className="space-y-2">
            {
              res?.number_order && res?.number_order > 0 && (
                <li>
                  <strong>Order number:</strong> {res?.number_order}
                </li>
              )
            }

            <li>
              <strong>Date:</strong> {res?.createdAt}
            </li>
            <li>
              <strong>Email:</strong> {res?.order_info_customer?.emailAddress}
            </li>
            <li>
              <strong>Total:</strong> ${subtotal + res?.order_info_customer?.shipping}
            </li>
            <li>
              <strong>Payment method:</strong> {res?.order_info?.payment_source?.paypal ? 'Paypal' : 'Credit card'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

