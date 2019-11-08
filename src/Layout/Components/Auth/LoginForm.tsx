import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { login } from "../../../store/actions/auth";
import { storeState } from "../../../store/store";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  login: typeof login;
  isAuthenticated: boolean;
}
interface State {
  username: string;
  password: string;
}

class LoginForm extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }
  // LOGIN THE USER
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { username, password } = this.state;
    console.log("LOGIN PROPS", this.props);

    this.props.login(username, password);
  }

  render() {
    //redirect to cart if user when user login
    const { username, password } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to="/cart" />;
    }

    return (
      <div className="Login container">
        <h4>Please Enter your username and password</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              onChange={this.handleChange}
              name="username"
              id="username"
              type="text"
              className="validate"
              value={username}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field">
            <input
              onChange={this.handleChange}
              id="password"
              type="password"
              name="password"
              className="validate"
              value={password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            className="btn waves-effect waves-light bg-teal"
            type="submit"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
        <p>
          Don't have and account? <Link to="/register">Register</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: storeState) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
