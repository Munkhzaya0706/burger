import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/signupActions";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
export const Logout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.logout();
    navigate("/login");
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
