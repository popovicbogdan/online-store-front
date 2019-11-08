import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../store/actions/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { storeState } from "../../../store/store";

interface Props {
  isAuthenticated: boolean;
  registerUser: typeof registerUser;
}
interface State {
  username: string;
  password: string;
  email: string;
}

class LoginForm extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      email: "",
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
  // REGISTER USER
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log("Register props", this.props);
    this.props.registerUser(username, email, password);
  }

  render() {
    // redirect to cart upon registering
    const { username, email, password } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to="/cart" />;
    }

    return (
      <div className="Login container">
        <h4>Please fill the fields with information</h4>
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
              name="email"
              id="email"
              type="text"
              className="validate"
              value={email}
            />
            <label htmlFor="email">Email</label>
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
            Create account
            <i className="material-icons right">send</i>
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
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
  { registerUser }
)(LoginForm);
