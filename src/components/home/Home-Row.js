import './Home.css';
import Product from './product/Product';

function HomeRow({ products }) {
    return (
        <div className="home-row">
            {
                products.map((product, _) => <Product
                    key={_}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    category={product.category}
                    img={product.img}
                    desc={product.desc}
                />)
            }
        </div>
    );
}

export default HomeRow;