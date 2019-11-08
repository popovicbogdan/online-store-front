import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import LoginForm from "./Components/Auth/LoginForm";
import PrivateRoute from "../common/PrivateRoute";
import Checkout from "./Components/Checkout";
import RegisterForm from "./Components/Auth/RegisterForm";

interface State {
  category: string;
}
class Dashboard extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: ""
    };
    this.handler = this.handler.bind(this);
  }
  //func passed to child that returns an input value, so i can pass that
  //  input value to the child and use it in mapstatetoprops
  handler(value: string) {
    this.setState({
      category: value
    });
  }

  render() {
    return (
      <div className="Dashboard container">
        <Header />
        <Route
          exact
          path="/"
          render={(props: any) => (
            <Shop {...props} cat={this.state.category} func={this.handler} />
          )}
        />
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <PrivateRoute path="/checkout" component={Checkout} />
      </div>
    );
  }
}

export default Dashboard;
