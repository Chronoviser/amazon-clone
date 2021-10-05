import './Profile.css';
import { useEffect, useState } from 'react';
import { useStateValue } from '../../provider/StateProvider';
import { useHistory } from 'react-router-dom';
import { db, auth } from '../../firebase';

function Profile() {

    const [{ cart, amount, user, userInfo }, dispatch] = useStateValue();
    const history = useHistory();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [flat, setFlat] = useState("");

    useEffect(() => {
        if (userInfo) {
            console.log(userInfo);
            setName(userInfo.name);
            setMobile(userInfo.mobile);
            setRegion(userInfo.region);
            setCity(userInfo.city);
            setPincode(userInfo.pincode);
            setFlat(userInfo.flat);
        }
    }, [user]);

    const saveInfo = (e) => {
        e.preventDefault();

        if (name.length > 0 &&
            mobile.length > 0 &&
            region.length > 0 &&
            city.length > 0 &&
            pincode.length > 0 &&
            flat.length > 0) {

            const uInfo = {
                'name': name,
                'email': user.email,
                'mobile': mobile,
                'region': region,
                'city': city,
                'pincode': pincode,
                'flat': flat
            }

            console.log('cart: ', cart, ', amount: ', amount, ', userInfo: ', uInfo);

            db
                .collection('users')
                .doc(user?.uid)
                .collection('info')
                .doc('info')
                .set({
                    userInfo: uInfo,
                    cart: cart,
                    amount: amount
                })
                .then((_) => alert("Changes Saved Successfully!"));
        }
        else {
            alert('All the Fields are important!!!');
        }
    }

    const logout = () => {
        if (user) {
            dispatch({
                type: 'SET_CART',
                cart: [],
                amount: 0,
                userInfo: null
            });

            auth.signOut();
            history.replace('/');
        }
    }

    return (
        user && <div className="profile">
            <div className="profile-container">
                <h2 className="profile-title"> Edit your profile </h2>
                <div className="profile-form">
                    <form onSubmit={saveInfo}>
                        <h5>Full Name</h5>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <h5>Email</h5>
                        <input
                            type="email"
                            value={user?.email}
                            disabled={true} />

                        <h5>Mobile Number</h5>
                        <input
                            type="number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)} />

                        <h5>State / Province / Region</h5>
                        <input
                            type="text"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)} />

                        <h5>Town/City</h5>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />

                        <h5>PIN code</h5>
                        <input
                            type="number"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)} />

                        <h5>Flat, House no., Building, Company, Apartment</h5>
                        <input
                            type="text"
                            value={flat}
                            onChange={(e) => setFlat(e.target.value)} />

                        <button>Save Changes</button>
                    </form>
                </div>
                <div className="profile-signout">
                    <button onClick={logout}>Signout</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;