import { useStateValue } from '../../../provider/StateProvider';
import './Checkout-Product.css';

function CheckoutProduct({ id, title, price, rating, img, hideRemoveFromCart }) {

    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" alt="" src={img} />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-info-title">{title}</p>
                <p className="checkoutProduct-info-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-info-rating">
                    {
                        Array(rating).fill().map((_, i) => <p key={i}>⭐</p>)
                    }
                </div>
                {!hideRemoveFromCart && (<button onClick={removeFromCart}>Remove from Cart</button>)}
            </div>
        </div>
    );
}

export default CheckoutProduct;