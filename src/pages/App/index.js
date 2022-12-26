import React, { Component } from "react";
import css from "./style.module.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import * as actions from "../../Redux/actions/loginActions";
import * as signUpactions from "../../Redux/actions/signupActions";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";

class App extends React.Component {
  state = {
    showSidebar: false,
  };
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        this.props.logout();
      }
    }
  };
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          {/* <OrderPage /> */}

          {this.props.userid ? (
            <Routes>
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/" element={<BurgerPage />} />
              <Route exact path="/ship/*" element={<ShippingPage />} />
              <Route path="/orders" element={<OrderPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/signup" element={<SignupPage />} />
              <Route exact path="*" element={<LoginPage />} />
            </Routes>
          )}
        </main>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    userid: state.signupReducer.userid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signUpactions.logout()),
    autoLogoutAfterMillisec: () =>
      dispatch(signUpactions.autoLogoutAfterMillisec()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
