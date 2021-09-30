import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import { auth } from '../../../firebase';

function Signup() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpUser = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="signup">
            <Link to="/">
                <img
                    className="signup-logo"
                    src="https://www.india.com/wp-content/uploads/2016/01/amazon-india-logo.jpg222.jpg"
                    alt=""
                />
            </Link>

            <div className="signup-container">
                <div className="signup-container-top">
                    <p className="signup-container-top-title">Sign-Up</p>
                    <form>
                        <h5>Your Name</h5>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

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

                        <button onClick={signUpUser}>Sign-Up</button>
                    </form>

                    <p className="signup-container-top-terms">
                        By signing-up, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                    <p className="signup-container-top-terms">
                        Already have account?&nbsp;
                        <Link
                            to="/signin"
                            style={{ textDecoration: 'none', color: 'blue' }}>
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;