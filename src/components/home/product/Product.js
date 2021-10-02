import './Product.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../../provider/StateProvider';

function Product({ id, title, price, rating, category, img }) {

    const [{ }, dispatch] = useStateValue();
    const history = useHistory();

    const addToCart = () => {
        // dispatch some action into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                category: category,
                img: img
            }
        })
    }

    const showProductDetails = () => {
        history.push({
            pathname: `/${id}`,
            state: {
                data: {
                    id: id,
                    title: title,
                    price: price,
                    rating: rating,
                    category: category,
                    img: img
                }
            }
        });
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
                        Array(rating).fill().map((_, i) => <p key={i}>⭐</p>)
                    }
                </div>
            </div>
            <img src={img} alt="" onClick={showProductDetails} />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;