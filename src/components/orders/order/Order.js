import './Order.css';
import CheckoutProduct from '../../checkout/checkout-product/Checkout-Product';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order-id">
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map((product, _) => (<CheckoutProduct
                key={_}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                img={product.img}
                hideRemoveFromCart
            />))}
            <CurrencyFormat
                renderText={
                    (value) => (
                        <h3 className="order-total">Order Total: {value}</h3>
                    )
                }
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    );
}

export default Order;