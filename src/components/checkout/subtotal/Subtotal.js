import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../provider/StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
    const [{ cart, amount }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={
                    (value) => (
                        <>
                            <p>
                                Subtotal ({cart.length} items):&nbsp;
                                <strong>{value}</strong>
                            </p>
                            <small className="subtotal-gift">
                                <input type="checkbox" />This order contains a gift
                            </small>
                        </>
                    )
                }
                decimalScale={2}
                value={amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button
                disabled={amount === 0}
                onClick={(e) => { history.push('/payment') }}
            >Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;