import React from "react";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../Redux/actions/orderActions";

class OrderPage extends React.Component {
  componentDidMount() {
    this.props.loadOrders(this.props.userId);
  }

  render() {
    console.log("=========", this.props.orders);
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}
const mapStateToPtops = (state) => {
  return {
    userId: state.signupReducer.userid,
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};
export default connect(mapStateToPtops, mapDispatchToProps)(OrderPage);
