import axios from "axios";

export const signupUser = (email, password1) => {
  return function (dispatch) {
    dispatch(signupStart());
    const data = {
      email,
      password: password1,
      returnSecureToken: true,
    };

    console.log(data);
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZJYI44Hp1wDy9mVFOti4WeQenlKv9ywA`,
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dispatch(signupUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(signupError(err.response.data.error.message));
      });
  };
};

export const signupStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};
export const signupUserSuccess = (token, userId) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userId,
  };
};
export const signupError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};
export const autoLogoutAfterMillisec = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
