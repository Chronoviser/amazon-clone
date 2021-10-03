import './Payment.css';
import { useStateValue } from '../../provider/StateProvider';
import CheckoutProcut from '../checkout/checkout-product/Checkout-Product';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import axios from '../../services/axios';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase';

function Payment() {

    const [{ cart, amount, user }, dispatch] = useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generating special clientSecret that allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${amount * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, [amount])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            // push orders to firestore
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            });

            history.replace('/orders');
        });

    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    {cart.length} Items
                </h1>
                <div className="payment-section">
                    <div className="payment-section-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-section-address">
                        <p>{user?.email}</p>
                        <p>Bazaar No. 2,</p>
                        <p>Adda Lal kurti, Firozpur Cantt - 152001</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-section-ttile">
                        <h3>Review Items <br />and Delivery Address</h3>
                    </div>
                    <div className="payment-section-items">
                        {
                            cart.map((product, _) => <CheckoutProcut
                                key={_}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                img={product.img}
                            />)
                        }
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-section-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-section-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment-price-container">
                                <CurrencyFormat
                                    renderText={
                                        (value) => (
                                            <>
                                                <p className="subtotal">
                                                    Subtotal ({cart.length} items):&nbsp;
                                                    <strong>{value}</strong>
                                                </p>
                                            </>
                                        )
                                    }
                                    decimalScale={2}
                                    value={amount}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing
                                            ? <p>Processing</p>
                                            : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {
                                error &&
                                <div>{error}</div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;