import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/authentication/signin/Signin';
import Signup from './components/authentication/signup/Signup';
import Payment from './components/payment/Payment';
import Orders from './components/orders/Orders';
import ProductDetail from './components/product-detail/Product-Detail';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './provider/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Profile from './components/profile/Profile';

const promise = loadStripe('pk_test_51JflfJSHbOghTLIyIqVqYo5DbNMGxoBF9EWnyW02SiwnDQulB1uIhRmvPQYD6WYpWlviVd6MDa6o4obTNzTW0BnI000ByeEtdv');


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser })
      }
      else {
        dispatch({ type: "SET_USER", user: null })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/:id">
            <Header />
            <ProductDetail />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
