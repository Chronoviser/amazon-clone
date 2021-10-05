import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signin.css';
import { auth } from '../../../firebase';

function Signin() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInUser = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="signin">
            <Link to="/">
                <img
                    className="signin-logo"
                    src="https://i.ibb.co/L6HYg3B/amazon-india-logo-jpg222.jpg"
                    alt=""
                />
            </Link>

            <div className="signin-container">
                <div className="signin-container-top">
                    <p className="signin-container-top-title">Sign-In</p>
                    <form>
                        <h5>Email</h5>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <button onClick={signInUser}>Sign-In</button>
                    </form>

                    <p className="signin-container-top-terms">By signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                </div>

                <div className="signin-container-bottom">
                    <div className="signin-container-bottom-title">
                        <p className="signin-container-line">&nbsp;</p>
                        <p className="signin-container-newtoamazon"> New to Amazon?</p>
                        <p className="signin-container-line">&nbsp;</p>
                    </div>
                    <button>
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
                            Create your Amazon account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;