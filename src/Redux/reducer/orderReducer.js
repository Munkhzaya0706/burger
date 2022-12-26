const initialState = {

    // LOAD ORDER
    orders: [],
    loading: false,
    error: null,

    // SAVE ORDER

    newOrder: {
        saving: false,
        finished: false,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_ORDERS_START":
            return {
                ...state,
                loading: true
            };
        case "LOAD_ORDERS_Success":
            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        case "LOAD_ORDERS_Error":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "SAVE_ORDER_START":
            return {
                ...state,
                newOrder: {
                    ...state.newOrder,
                    saving: true
                }
            };
        case "SAVE_ORDER_Success":
            return {
                ...state,
                newOrder: {
                    ...state.newOrder,
                    saving: false,
                    finished: true,
                    error: null
                }
            };
        case "SAVE_ORDER_Error":
            return {
                ...state,
                newOrder: {
                    ...state.newOrder,
                    saving: false,
                    finished: true,
                    error: action.error
                }
            };
        default: return state;
    };
};
export default reducer;