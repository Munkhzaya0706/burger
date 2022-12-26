import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import { useNavigate, Outlet, Routes, Route } from "react-router";
import ContactData from "../../components/Contact";
import withRouter from "../../withRouter";

export const ShippingPage = (props) => {
    const navigate = useNavigate()

    const HistoryGoBack = () => {
        navigate(-2)
    }
    const showContactData = () => {
        navigate('contact')
    }


    return <div className={ css.ShippingPage }>
        <p style={ { fontSize: "24px" } }><strong>Таны захиалга амттай байх болно </strong></p>
        <p style={ { fontSize: "24px" } }>Дүн: <strong>{ props.price }₮</strong></p>
        <Burger />
        <Button clicked={ HistoryGoBack } btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ"></Button>
        <Button clicked={ showContactData } btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"></Button>
        < Outlet />
        <Routes>
            <Route path='contact' element={ <ContactData /> } />
        </Routes>
    </div>;

}


const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(withRouter(ShippingPage));





// export class ShippingPage extends Component {
//     constructor (props) {
//         super(props);
//         console.log(this.props);
//         this.state = {
//             ingredients: {
//                 salad: 0,
//                 cheese: 2,
//                 bacon: 3,
//                 meat: 5
//             }
//         };
//     }


//     showContactData = () => {
//         this.props.router("/ship/contact")
//     };
//     render() {

//         return <div className={ css.ShippingPage }>
//             <p style={ { fontSize: "24px" } }><strong>Таны захиалга амттай байх болно </strong></p>
//             <Burger orts={ this.state.ingredients } />
//             <Button clicked={ this.showContactData } btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ"></Button>
//             <Button clicked={ this.showContactData } btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"></Button>
//         </div>;
//     }
// }

// export default withRouter(ShippingPage);