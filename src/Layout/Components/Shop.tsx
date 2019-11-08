import React from "react";
import { connect } from "react-redux";
import { storeState } from "../../store/store";
import SingleItem from "./SingleItem";

interface Props {
  items: any[];
  func: any;
}
interface State {
  category: string;
}
class Shop extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // return the value of category to parent component
  handleChange(event: any) {
    var val = event.target.value;
    this.props.func(val);
  }
  render() {
    console.log("SHOP PROPS", this.props);
    const ItemsList = this.props.items
      ? this.props.items.map(item => <SingleItem key={item.id} item={item} />)
      : null;
    return (
      <div className="Shop container">
        <div className="Info container">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={this.handleChange}>
            <option value="">All</option>
            <option value="F">Women</option>

            <option value="M">Men</option>
          </select>
        </div>
        <div className="row">{ItemsList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state: storeState, ownProps: any) => {
  const category = ownProps.cat ? ownProps.cat : "";
  return category
    ? {
        items: state.store.store.filter(item => item.gender.includes(category))
      }
    : {
        items: state.store.store
      };
};
export default connect(mapStateToProps)(Shop);
