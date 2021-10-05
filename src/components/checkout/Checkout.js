import { useStateValue } from '../../provider/StateProvider';
import CheckoutProduct from './checkout-product/Checkout-Product';
import './Checkout.css';
import Subtotal from './subtotal/Subtotal';

function Checkout() {

    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout-left-ad"
                src="https://i.ibb.co/1XtjXb3/Stihl-Banner-ad-12.jpg"
                alt=""
            />
            <div className="checkout-content">
                <div className="checkout-left">
                    <div>
                        <h2 className="checkout-left-title">Your shopping Cart</h2>
                        {
                            cart.map((product, i) => <CheckoutProduct
                                key={i}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                img={product.img}
                            />)
                        }
                    </div>
                </div>

                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>

        </div>
    );
}

export default Checkout;