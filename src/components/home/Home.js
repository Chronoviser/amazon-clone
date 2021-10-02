import './Home.css';
import HomeRow from './Home-Row';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../provider/StateProvider';

function Home() {

    const [products, setProducts] = useState([]);
    const [{ category }, dispatch] = useStateValue();

    useEffect(() => {
        db
            .collection('products')
            .onSnapshot(snapshot => (
                setProducts(snapshot.docs.map(doc => doc.data()))
            ));
    }, [])

    let p2s = [], p3s = [], temp = [];
    return (
        <div className="home">
            <div className="home-container">
                <img
                    src="https://m.media-amazon.com/images/I/71FSVYGiPEL._SX3000_.jpg"
                    alt=""
                    className="home-container-image"
                />
                {
                    products.map((p, _) => {
                        console.log(category);
                        if (category === "All" || p.category === category) {
                            if (p3s.length < 3) p3s.push(p);
                            else p2s.push(p);

                            if (p3s.length === 3) {
                                if (p2s.length === 0) {
                                    return <HomeRow products={p3s} />
                                }
                                else if (p2s.length === 2) {
                                    temp = p2s;
                                    p3s = [];
                                    p2s = [];
                                    return <HomeRow products={temp} />
                                }
                            }
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Home;