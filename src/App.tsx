import React from "react";
import Dashboard from "./Layout/Dashboard";
import store from "./store/store";
import { connect } from "react-redux";
import { loadUser } from "./store/actions/auth";
interface Props {
  loadUser: typeof loadUser;
}

class App extends React.PureComponent<Props> {
  // check if we are authenticated whenever app renders
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}
export default connect(
  null,
  { loadUser }
)(App);
