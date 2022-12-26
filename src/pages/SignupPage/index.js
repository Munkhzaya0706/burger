import React from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css"
import * as actions from "../../Redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";


export const SignupPage = (props) => {

    const [state, setState] = React.useState({
        email: "",
        password1: "",
        password2: "",
        error: ""

    });

    const Signup = () => {
        console.log("===>" + props.signupUser)
        if (state.password1 === state.password2) {
            props.signupUser(state.email, state.password1);
        } else {
            setState({ error: 'Нууц үг ижил биш байна!' });
        }
    };
    const changeEmail = e => {
        setState({ ...state, email: e.target.value })
    };
    const changePassword1 = e => {
        setState({ ...state, password1: e.target.value })
    };
    const changePassword2 = e => {
        setState({ ...state, password2: e.target.value })
    };

    return (<div className={ css.Signup }>
        { props.userid && <Navigate replace to="/" /> }
        <h1>Бүртгэлийн форм</h1>
        <div>ТА өөрийн мэдээллээ оруулна уу.</div>
        <input onChange={ changeEmail } type="text" placeholder="Имейл хаяг" />
        <input onChange={ changePassword1 } type="password" placeholder="Нууц үг" />
        <input onChange={ changePassword2 } type="password" placeholder="Нууц үг давтана уу" />
        { state.error && (
            <div style={ { color: 'red' } } >{ state.error }</div>
        ) }

        {
            props.firebaseError && <div style={ { color: 'red' } } >{ props.firebaseError }</div>
        }

        { props.saving && <Spinner /> }
        <Button text="Бүртгүүлэх" btnType="Success" clicked={ Signup } />
    </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (email, password1) => dispatch(actions.signupUser(email, password1))
    }
}

const mapStateToProps = state => {
    return {
        saving: state.signupReducer.saving,
        firebaseError: state.signupReducer.firebaseError,
        userId: state.signupReducer.userid
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);