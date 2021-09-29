import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../provider/StateProvider';

function Header() {

    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header-logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="header-option">
                <span className="header-option-1">Aapki</span>
                <span className="header-option-2">Pados Wali Dukan!</span>
            </div>
            <div className="header-search">
                <input className="header-search-input" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-1">Hello</span>
                    <span className="header-option-2">Sign in</span>
                </div>
                <div className="header-option">
                    <span className="header-option-1">Returns</span>
                    <span className="header-option-2">& Orders</span>
                </div>
                <div className="header-option">
                    <span className="header-option-1">Your</span>
                    <span className="header-option-2">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header-option-basket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header-option-2 header-option-basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;