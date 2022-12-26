const initialState = {
  saving: false,
  loginIn: false,
  firebaseError: null,
  token: "",
  userid: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userid: action.userId,
      };

    case "LOGIN_USER_START":
      return {
        ...state,
        loginIn: true,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loginIn: false,
        firebaseError: action.error,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loginIn: false,
        token: action.token,
        userid: action.userId,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userid: null,
        firebaseError: null,
      };
    default:
      return state;
  }
};

export default reducer;
