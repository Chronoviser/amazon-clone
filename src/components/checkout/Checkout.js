import './Checkout.css';
import Subtotal from './subtotal/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <img
                className="checkout-left-ad"
                src="https://s301.podbean.com/pb/74962c7ea1a789ef54ef49d9efacb779/6154702e/data1/fs156/9265397/uploads/Podbean_FINALFINAL_2021a8cyjj.jpg?pbss=9109a767-98ce-5541-afee-bcf65f01f0ed"
                alt=""
            />
            <div className="checkout-content">
                <div className="checkout-left">
                    <div>
                        <h2 className="checkout-left-title">
                            Your shopping Cart
                        </h2>
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