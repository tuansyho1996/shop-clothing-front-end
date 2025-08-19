import { getExplorerUrl, getNameChain } from "@/components/providers/network";
import PriceDisplay from "@/components/ui/display.price";
import { fetchOrder } from "@/services/service.payment";
import dayjs from "dayjs";
import Link from "next/link";
export default async function OrderRecieved({ params }) {
  const res = await fetchOrder(params.id)
  const nameChain = getNameChain(res?.order_info?.chainId);
  const chainUrl = getExplorerUrl(res?.order_info?.chainId, res?.order_info?.txHash);
  // const res?.order_info?.subtotal = res?.order_info?.items.reduce((sum, el) => el.product_price_eth * el.product_count + sum, 0)
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
                res?.order_info?.items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2 border-b">{item.product_name} x {item.product_count} - {item.product_size} - {item.product_color}</td>
                      {/* <td className="p-2 border-b text-right font-bold">${item.product_price_eth}</td> */}
                      <td className="p-2 border-b text-right font-bold"><PriceDisplay currency="ETH" price={item.product_price_eth} font="font-semibold" /></td>
                    </tr>
                  )
                })
              }
              <tr>
                <td className="p-2">Subtotal:</td>
                <td className="p-2 text-right font-bold">
                  <PriceDisplay currency="ETH" price={parseFloat(res?.order_info?.subtotal)} font="font-semibold" />
                </td>
              </tr>
              <tr>
                <td className="p-2">Shipping:</td>
                <td className="p-2 text-right font-bold">
                  <PriceDisplay currency="ETH" price={parseFloat(res?.order_info?.shippingFee)} font="font-semibold" />
                </td>
              </tr>
              <tr>
                <td className="p-2">Payment method:</td>
                {/* <td className="p-2 text-right min-w-28 ">{res?.order_info?.payment_source?.paypal ? 'Paypala' : 'Credit card'}</td> */}
              </tr>
              <tr>
                <td className="p-2 font-bold">Total:</td>
                <td className="p-2 text-right font-bold">
                  <PriceDisplay currency="ETH" price={parseFloat(res?.order_info?.subtotal) + parseFloat(res?.order_info?.shippingFee)} font="font-semibold" />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Address Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Billing address</h3>
              <p>{res?.order_info?.firtName} {res?.order_info?.lastName}</p>
              <p>{res?.order_info?.address}</p>
              <p>{res?.order_info?.apartmentSuite},{res?.order_info?.city} {res?.order_info?.state}</p>
              <p>{res?.order_info?.country}</p>
              <p>{res?.order_info?.phone}</p>
              <p>{res?.order_info?.email}</p>
            </div>

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
              <strong>Chain:</strong> {nameChain}
            </li>
            <li className="flex items-center">
              <strong>Txn Hash:</strong>
              <Link href={chainUrl} target="_blank" className="text-blue-500 hover:underline ml-2 hidden sm:inline-block">
                {res?.order_info?.txHash
                  ? `${res.order_info.txHash.slice(0, 15)}...${res.order_info.txHash.slice(-15)}`
                  : ""}
              </Link>

              <Link href={chainUrl} target="_blank" className="text-blue-500 hover:underline ml-2 sm:hidden">
                {res?.order_info?.txHash
                  ? `${res.order_info.txHash.slice(0, 10)}...${res.order_info.txHash.slice(-10)}`
                  : ""}
              </Link>
            </li>
            <li>
              <strong>Date:</strong> {res?.createdAt && dayjs(res.createdAt).format("DD/MM/YYYY")}
            </li>
            <li>
              <strong>Email:</strong> {res?.order_info?.email}
            </li>
            <li className="flex items-center">
              <strong>Total:</strong>
              <PriceDisplay currency="ETH" price={parseFloat(res?.order_info?.subtotal) + parseFloat(res?.order_info?.shippingFee)} font="font-semibold" />
            </li>
            <li>
              {/* <strong>Payment method:</strong> {res?.order_info?.payment_source?.paypal ? 'Paypal' : 'Credit card'} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

