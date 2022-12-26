import React, { useEffect } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import withRouter from "../../withRouter";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import Spinner from "../General/Spinner";
import * as actions from "../../Redux/actions/orderActions";

export const ContactData = (props) => {
  const [state, setState] = React.useState({
    state: {
      name: null,
      city: null,
      street: null,
    },
  });
  let changeName = (ev) => {
    setState({ ...state, name: ev.target.value });
  };
  let changeStreet = (ev) => {
    setState({ ...state, street: ev.target.value });
  };
  let changeCity = (ev) => {
    setState({ ...state, city: ev.target.value });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      navigate("/orders");
    }
  });

  let saveOrder = () => {
    const newOrder = {
      userId: props.userId,
      orts: props.ingredients,
      dun: props.price,
      hayag: {
        name: state.name,
        city: state.city,
        street: state.street,
      },
    };
    props.saveOrderAction(newOrder);
  };
  return (
    <div className={css.ContactData}>
      Дүн: {props.price}₮ <br />
      <div>
        {props.newOrderStatus.error &&
          `Захиалгыг хадгалах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="Таны гэрийн хаяг"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="Таны хот"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" clicked={saveOrder} />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userid,
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
