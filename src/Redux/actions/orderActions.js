import axios from "../../axios-order";

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    dispatch(loadOrderStart());
    const token = getState().signupReducer.token;
    console.log("ttttttttt", token);
    // this.setState({ loading: true });
    axios
      .get(`orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        dispatch(loadOrderSuccess(Object.entries(response.data).reverse()));
      })
      .catch((err) => dispatch(loadOrderError(err)));
  };
};

export const loadOrderStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};
export const loadOrderSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_Success",
    orders: loadedOrders,
  };
};
export const loadOrderError = (error) => {
  return {
    type: "LOAD_ORDERS_Error",
    error,
  };
};

// Захиалгыг хадгалах хэсэг
export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signupReducer.token;
    console.log("first", token);
    // setState({ loading: true });
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};
export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_Success",
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_Error",
    error,
  };
};
