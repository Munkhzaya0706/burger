import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import burgerReducer from "./Redux/reducer/burgerReducer";
import orderReducer from "./Redux/reducer/orderReducer";
import thunk from "redux-thunk";
import signupReducer from "./Redux/reducer/signupLoginReducer";

const loggerMiddleware = store => {
  return next => {
    return action => {
      console.log("MyLoggerMiddleware: Dispatching ==>", action);
      console.log("MyLoggerMiddleware: State before : ", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleware: State after : ", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  signupReducer
})
const middlewares = [loggerMiddleware, thunk]
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
