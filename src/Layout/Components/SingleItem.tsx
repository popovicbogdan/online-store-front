import React from "react";
import { Item } from "../../store/store";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/shop";

interface Props {
  item: Item;
  cart?: boolean;
  addToCart: typeof addToCart;
  removeFromCart: typeof removeFromCart;
}
interface State {
  size: string;
}
class SingleItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      size: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      size: e.target.value
    });
  }
  // If item is in cart call removeFromCart
  // check if user selected size &  if it is item is not in cart call addToCart
  handleClick(event: any) {
    event.preventDefault();
    console.log("CURRENT SIZE", this.state.size);
    this.props.cart
      ? this.props.removeFromCart(this.props.item)
      : this.state.size !== null
      ? this.props.addToCart(this.props.item, this.state.size)
      : alert("please select size");
  }

  render() {
    return (
      <div className="SingleItem col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img src={this.props.item.img} alt="" />
            <button
              type="submit"
              className="btn-floating halfway-fab waves-effect waves-light teal hoverable"
              onClick={this.handleClick}
            >
              <i className="material-icons">
                {this.props.cart ? "remove" : "add"}
              </i>
            </button>
          </div>
          <span className="card-title">{this.props.item.name}</span>

          <div className="card-content">
            <div className="container">
              <p className="desc">{this.props.item.description}</p>
              <div className="card-footer">
                {this.props.cart ? (
                  <p>Size: {this.props.item.cartSize}</p>
                ) : (
                  <>
                    <label htmlFor="size">Select size</label>
                    <select
                      name="size"
                      id="size"
                      defaultValue="Size"
                      onChange={this.handleChange}
                    >
                      <option disabled>Size</option>
                      {this.props.item.size.map(item => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                <span className="desc">Price: {this.props.item.price}$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart, removeFromCart }
)(SingleItem);
