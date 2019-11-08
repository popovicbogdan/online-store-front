import React from "react";
import { ReactComponent as Logo } from "../media/images/LOGOOOOOOOO.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { storeState } from "../store/store";
import { logout } from "../store/actions/auth";

interface Props {
  numOfItems: number;
  isAuthenticated: boolean;
  logout: any;
}

const Header: React.FC<Props> = props => {
  const navlinks = props.isAuthenticated ? (
    <>
      <Link className="navitem" to="/profile">
        Profile
      </Link>
      <Link className="navitem" to="/">
        <button onClick={() => props.logout()}>Logout</button>
      </Link>
    </>
  ) : (
    <>
      <Link className="navitem" to="/login">
        Login
      </Link>
      <Link className="navitem" to="/register">
        Register
      </Link>
    </>
  );
  return (
    <header className="Navbar header">
      <Link className="navitem" to="/">
        Home
      </Link>
      <Link className="navitem" to="/cart">
        Cart ({props.numOfItems})
      </Link>
      <Logo className="logo" />
      {navlinks}
    </header>
  );
};

const mapStateToProps = (state: storeState) => {
  return {
    numOfItems: state.cart.cart.length ? state.cart.cart.length : 0,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
