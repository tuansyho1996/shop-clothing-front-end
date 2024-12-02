import { fetchOrder } from "@/services/service.payment";
export default async function ({ params }) {
  const res = await fetchOrder(params.id)
  console.log(res)
  return (
    <div className="container mx-auto p-4">
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
                // res?.order_info?.
              }
              <tr>
                <td className="p-2 border-b">hoodie × 1</td>
                <td className="p-2 border-b text-right">$12</td>
              </tr>
              <tr>
                <td className="p-2">Subtotal:</td>
                <td className="p-2 text-right">$12</td>
              </tr>
              <tr>
                <td className="p-2">Shipping:</td>
                <td className="p-2 text-right">Free shipping</td>
              </tr>
              <tr>
                <td className="p-2">Payment method:</td>
                <td className="p-2 text-right">PayPal</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Total:</td>
                <td className="p-2 text-right font-bold">$12</td>
              </tr>
            </tbody>
          </table>

          {/* Address Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Billing address</h3>
              <p>John Doe</p>
              <p>1st</p>
              <p>ast</p>
              <p>San Jose, AL 22222</p>
              <p>United States (US)</p>
              <p>+84346656163</p>
              <p>sb-rypkv33926525@personal.example.com</p>
            </div>
            <div>
              <h3 className="font-bold">Shipping address</h3>
              <p>John Doe</p>
              <p>1st</p>
              <p>ast</p>
              <p>San Jose, AL 22222</p>
              <p>United States (US)</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 p-4 border border-gray-200">
          <h3 className="text-green-700 font-bold text-lg mb-4">
            Thank you. Your order has been received.
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Order number:</strong> 71
            </li>
            <li>
              <strong>Date:</strong> November 28, 2024
            </li>
            <li>
              <strong>Email:</strong> sb-rypkv33926525@personal.example.com
            </li>
            <li>
              <strong>Total:</strong> $12
            </li>
            <li>
              <strong>Payment method:</strong> PayPal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

