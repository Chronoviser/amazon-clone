import './Product-Detail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStateValue } from '../../provider/StateProvider';
import { db } from '../../firebase';

function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const [{ }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: product
        });
    }

    useEffect(() => {
        db
            .collection('products')
            .doc(id)
            .get()
            .then((snapshot) => setProduct(snapshot.data()))
            .catch(err => console.log(err));
    }, [id]);

    return (
        product && <div className="productDetail">
            <img className="productDetail-img" src={product.img} alt="" />
            <div className="productDetail-info">
                <h3 className="item">{product.title}</h3>
                <div className="item">
                    {
                        Array(product.rating).fill().map((_, i) => <p key={i}>⭐</p>)
                    }
                </div>
                <p className="item productDetail-info-price">
                    ₹ {product.price}
                </p>
                <div className="productDetail-info-desc">
                    <p>About this item:</p>
                    <p className="item-desc">{product.desc}</p>
                </div>
            </div>
            <div className="productDetail-buy">
                <p>1 Day delivery for Prime Members</p>
                <p className="productDetail-buy-instock">In Stock</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;