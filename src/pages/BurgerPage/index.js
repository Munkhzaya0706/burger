import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
// import axios from "../../axios-order";
import Spinner from "../../components/General/Spinner";
import { ShippingPage } from "../ShippingPage";
import withRouter from "../../withRouter";



class BurgerPage extends Component {


    state = {
        confirmOrder: false,
        loading: false
    };

    // componentDidMount = () => {
    //     this.setState({ loading: true });
    //     axios.get('/orders.json').then(response => {
    //         const arr = Object.entries(response.data).finally(() => { this.setState({ loading: false }) });
    //     })
    // };


    continueOrder = () => {
        this.props.router.navigate({ pathname: '/ship' });
    }

    showConfirmModal = () => {
        this.setState({ confirmOrder: true });
    };
    closeConfirmModal = () => {
        this.setState({ confirmOrder: false });
    };


    render() {
        <ShippingPage ingredients={ this.props.burgeriinOrts }></ShippingPage>


        return (
            <div>
                <Modal closeConfirmModal={ this.closeConfirmModal } show={ this.state.confirmOrder }>
                    { this.state.loading ? <Spinner /> : <OrderSummary onCancel={ this.closeConfirmModal } onContinue={ this.continueOrder } /> }
                </Modal>
                { this.state.loading && <Spinner /> }
                <Burger />
                <BuildControls showConfirmModal={ this.showConfirmModal } ingredientsNames={ this.props.ingredientNames } ortsNemeh={ this.props.burgertOrtsNem } ortsHasah={ this.props.burgereesOrtsHas } />
            </div>
        )
    }

}


export default withRouter(BurgerPage);