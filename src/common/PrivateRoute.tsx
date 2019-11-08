import React from "react";
import { connect } from "react-redux";
import { storeState } from "../store/store";
import { Route, Redirect } from "react-router";

const PrivateRoute: React.FC<any> = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <h2>Loading.......</h2>;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state: storeState) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
