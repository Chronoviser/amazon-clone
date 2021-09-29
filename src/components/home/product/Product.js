import './Product.css';
import { useStateValue } from '../../../provider/StateProvider';

function Product({ id, title, price, rating, img }) {

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        // dispatch some action into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img
            }
        })
    }

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-info-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-info-rating">
                    {
                        Array(rating).fill().map((_, i) => <p>⭐</p>)
                    }
                </div>
            </div>
            <img src={img} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;