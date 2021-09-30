import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/authentication/signin/Signin';
import Signup from './components/authentication/signup/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './provider/StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

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
