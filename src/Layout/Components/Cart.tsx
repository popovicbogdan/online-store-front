import React from "react";
import { connect } from "react-redux";
import { storeState, Item } from "../../store/store";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

interface Props {
  cartItems: Item[];
}

const Cart: React.FC<Props> = props => {
  const items = props.cartItems
    ? props.cartItems.map((item: Item) => (
        <SingleItem key={item.id} item={item} cart={true} />
      ))
    : null;
  console.log(items);

  // sum the prices of items in cart
  const getTotalPrice = (cartItems: Item[]) => {
    let x = 0;
    for (let y of cartItems) {
      x += y.price;
    }
    return x;
  };
  return (
    <div className="Cart container">
      <div className="Total container">
        <big>Subtotal: {getTotalPrice(props.cartItems)}$ </big>{" "}
        <Link to="/checkout">
          <button className="btn waves-effect waves-light bg-teal">
            <i className="material-icons right">send</i>
            Checkout
          </button>
        </Link>
      </div>
      {items.length ? (
        <div className="row">{items}</div>
      ) : (
        <h2>
          Your cart is empty.... go to <Link to="/">Shop</Link>
        </h2>
      )}
    </div>
  );
};

const mapStateToProps = (state: storeState) => {
  return {
    cartItems: state.cart.cart,
    total: state.cart.cart
  };
};

export default connect(mapStateToProps)(Cart);
