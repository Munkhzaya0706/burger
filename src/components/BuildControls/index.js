import React from "react";
import withRouter from "../../withRouter";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/burgerActions";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {
  const disabledIngredients = { ...props.burgeriinOrts };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={ css.BuildControls }>
      <p> Бургерийн үнэ: <strong> { props.price }</strong></p>
      { Object.keys(props.ingredientNames).map(el => (
        <BuildControl
          key={ el }
          ortsHasah={ props.ortsHasah }
          ortsNemeh={ props.ortsNemeh }
          disabled={ disabledIngredients }
          type={ el }
          orts={ props.ingredientNames[el] }
        />

      )) }
      <button onClick={ props.showConfirmModal } disabled={ !props.purchasing } className={ css.OrderButton }>ЗАХИАЛАХ</button>
    </div>
  )
};
const mapStateToProps = state => {
  return {
    burgeriinOrts: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingrdientName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ortsNemeh: ortsNer => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: ortsNer => dispatch(actions.removeIngredient(ortsNer))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuildControls));
