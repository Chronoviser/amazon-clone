import './Home.css';
import Product from './product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img
                    src="https://m.media-amazon.com/images/I/71FSVYGiPEL._SX3000_.jpg"
                    alt=""
                    className="home-container-image"
                />

                <div className="home-row">
                    <Product
                        id="1"
                        title="JBL Quantum 100 by Harman, Wired Over Ear Gaming Headphones with Detachable Mic for PC, Mobile, PS4, Xbox (Black)"
                        price="2,199"
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/71+ZD+DmiyL._AC_UL450_SR450,320_.jpg"
                    />
                    <Product
                        id="2"
                        title="Redmi 9 (Carbon Black, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor"
                        price="9,499"
                        rating={4}
                        img="https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3"
                        title="YAMAHA PSR-I500 PORTABLE KEYBOARD WITH ADAPTOR"
                        price="21,043"
                        rating={4}
                        img="https://m.media-amazon.com/images/I/71JJOrdeWwS._SL1500_.jpg"
                    />
                </div>

                <div className="home-row">
                    <Product
                        id="4"
                        title="Cotton Kurti - blue"
                        price="442"
                        rating={4}
                        img="https://m.media-amazon.com/images/I/71-rKP5mhuS._AC_UL320_.jpg"
                    />
                    <Product
                        id="5"
                        title="The Sandman: Overture Deluxe Edition"
                        price="0.00"
                        rating={5}
                        img="https://images-eu.ssl-images-amazon.com/images/I/A1m1Bb6KtFL._AC_UL200_SR200,200_.jpg"
                    />
                    <Product
                        id="6"
                        title="Godrej aer spray, Air Freshener - Cool Surf Blue & Fresh Lush Green (Pack of 2, 240 ml each)"
                        price="269"
                        rating={3}
                        img="https://m.media-amazon.com/images/I/61aS1RUIoUL._SL1500_.jpg"
                    />
                </div>

                <div className="home-row">
                    <Product
                        id="7"
                        title="Acer ET322Qk 31.5 inch"
                        price="33,500"
                        rating={5}
                        img="https://m.media-amazon.com/images/I/81+3yAeQrPL._SL1500_.jpg"
                    />
                    <Product
                        id="8"
                        title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 7-core GPU, 8GB RAM, 256GB SSD) - Space Grey"
                        price="88,490"
                        rating={5}
                        img="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;