import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../provider/StateProvider';
import { auth } from '../../firebase';

function Header() {

    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }

    }

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
                <Link to={!user && "/signin"}>
                    <div className="header-option" onClick={handleAuthentication}>
                        <span className="header-option-1">
                            {
                                user
                                    ? `${user.email}`
                                    : "Hello"
                            }
                        </span>
                        <span className="header-option-2">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
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