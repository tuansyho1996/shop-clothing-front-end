
const ShippingPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 min-h-[50vh]">
            <h1 className="text-3xl font-bold mb-6">Shipping & Refund Policy</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Estimated Shipping Delivery Times:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>All over the world: 8 - 20 business days</li>
                </ul>
                <p className="mt-4">Your order will be sent out on average within 3 business days of ordering.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Free Shipping</h2>
                <p>Order more than $100 worth of stuff from us and we will ship it for free.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Order Never Arrived</h2>
                <h3 className="text-xl font-medium mb-2">Incorrect Address</h3>
                <p>We'd be happy to send you another order to the correct address, however, it will have to be at your cost.</p>
                <h3 className="text-xl font-medium mt-4 mb-2">Correct Address</h3>
                <p>If your address is correct and your package is lost in the mail, please contact USPS. If USPS is unable to locate the package, get in touch with our Support Team at <a href="mailto:support@100mph.cc" className="text-blue-600 underline">support@100mph.cc</a> within 4 weeks of the expected delivery date. Let us know your order number and we'll take care of you!</p>

                <p className="mt-4"><strong>Please Note:</strong> If tracking information states your order was delivered to the correct address but you did not receive it, you will need to contact USPS directly to resolve.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Exchange Policy</h2>

                <h3 className="text-xl font-medium mb-2">Too Small or Too Big</h3>
                <p>It is very important you order the right size - reshipments/refunds will not be given for buyer error or remorse.</p>

                <h3 className="text-xl font-medium mt-4 mb-2">Defective, Damaged, or Wrong Item</h3>
                <p>Received a defective, damaged, or wrong item? Reach out to our support team with pictures showing the issue within 30 days of the shipment being delivered for a replacement of that item. The item must be unused and in the same condition you received it.</p>
                <p className="mt-4">If 30 days have gone by since you received your purchase, we will not be able to offer you a replacement item.</p>

                <p className="mt-4">Once pictures of your item(s) issue are received and inspected, we will notify you of the approval or rejection of your reshipment. Then, we will send you an email to notify you that a reshipment has been processed and the replacement is on its way.</p>

                <p className="mt-4">Please do not send your purchase back without talking to the 100MPH support team.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Partial Refunds</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Any item not in its original condition, damaged, or missing parts for reasons not due to our error.</li>
                    <li>Any item that is returned more than 30 days after delivery.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Late or Missing Refunds</h2>
                <p>If you haven’t received a refund yet after receiving confirmation from our team, first check your bank account again. Next, contact your bank. There is often some processing time before a refund is posted (5-10 business days, depending on your banking institution).</p>
                <p className="mt-4">If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:support@100mph.cc" className="text-blue-600 underline">support@100mph.cc</a>.</p>
            </section>
        </div>
    );
};

export default ShippingPolicy;
