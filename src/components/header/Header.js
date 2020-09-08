import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaShoppingCart, FaStore } from "react-icons/fa";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import logo from "../../images/logo/logo.png";
import Icon from "./icon/Icon";
import Search from "./search/Search";
import "./Header.css";
import { auth } from "../../components/firebase/firebase.utils";
import CartDropDown from "../cart-drop-drown/CartDropDown";
import { toggleCart } from "../../redux/cart/cart.action";
import { selectUser } from "../../redux/user/user.select";
import { selectCartToggle } from "../../redux/cart/cart.select";

const Header = (props) => {
  return (
    <section className="header_main border_bottom">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-3 col-md-12">
            <Link to="/">
              <img className="Logo" src={logo} alt="_logo" />
            </Link>
          </div>

          <div className="col-xl-6 col-lg-5 col-md-12">
            <Search />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="header_icons">
              <Icon
                handleToggle={props.onToggleHandler}
                badge={true}
                icon={<FaShoppingCart />}
                text="Cart"
              />

              <Icon to="/orders" icon={<FaStore />} text="Orders" />
              <Icon
                to="/sign_in"
                icon={<FaUserAlt />}
                text={
                  props.currentUser ? (
                    <div onClick={() => auth.signOut()}>Sign out</div>
                  ) : (
                    <div>Sign in</div>
                  )
                }
              />
            </div>
          </div>
        </div>
        {props.show && <CartDropDown />}
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectUser,
  show: selectCartToggle,
});

const mapDispatchTopProps = (dispatch) => {
  return {
    onToggleHandler: () => dispatch(toggleCart()),
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Header);
