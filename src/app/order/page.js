const OrderPage = () => {
    return (
        <div>
            <h1></h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nhập mã đơn hàng..." required />
                <button type="submit">Tra cứu</button>
            </form>

        </div>
    );
}