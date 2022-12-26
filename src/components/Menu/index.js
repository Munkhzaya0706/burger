import React, { Fragment } from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import { connect } from "react-redux";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem true link="/">
            Шинэ захиалга
          </MenuItem>
          <MenuItem link="/orders"> Захиалгууд</MenuItem>
          <MenuItem link="/logout"> Гарах</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link="/login"> Нэвтрэх</MenuItem>
          <MenuItem link="/signup"> Бүртгүүлэх</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userid,
  };
};
export default connect(mapStateToProps)(Menu);
