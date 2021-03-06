import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./index.css";
import Home from "./pages/home/Home";
import Layout from "./hoc/Layout";
import Shop from "./pages/shop/Shop";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import { setCurrentUser } from "./redux/user/user.action";
import { selectUser } from "./redux/user/user.select";

import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import Checkout from "./pages/checkout/Checkout";
import Hooks from "./pages/hooks";

const App = (props) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      props.setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <Layout>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/sign_in"
          render={() => (props.currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />
        <Route exact path="/hooks" component={Hooks} />
      </Switch>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
