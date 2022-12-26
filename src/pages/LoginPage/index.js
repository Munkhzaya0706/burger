import React from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";

export const LoginPage = (props) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const login = () => {
    props.login(state.email, state.password);
  };

  const changeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };
  const changePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  return (
    <div className={css.Login}>
      {console.log("idididi" + props.userid)}
      {props.userid && <Navigate replace to="/orders" />}
      <input onChange={changeEmail} type="text" placeholder="Имейл хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {props.loginIn && <Spinner />}
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError} </div>
      )}
      <Button text="Логин" btnType="Success" clicked={login} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    loginIn: state.signupReducer.loginIn,
    firebaseError: state.signupReducer.firebaseError,
    userid: state.signupReducer.userid,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
