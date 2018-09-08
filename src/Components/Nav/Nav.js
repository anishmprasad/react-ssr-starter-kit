import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import logo from '../../assets/images/logo.svg';
import {
  userInfoAction
} from "../../redux/actions/sampleAction";
import { fetchData } from "../../redux/store/store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Nav extends Component {
	render(){
		return <div className={styles.navigation}>
        <Link to={`/${this.props.lang}`} className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span>React Serverside rendering</span>
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/${this.props.lang}/about`} activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${this.props.lang}/article`} activeClassName={styles.active}>
              Article
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${this.props.lang}/profile`} activeClassName={styles.active}>
              Profile
            </NavLink>
          </li>
          <li>{this.props.name}</li>
        </ul>
      </div>;
	}
}
function mapStateToProps(state) {
	console.log("personal_details", state.userInfo.personal_details);
	const { first_name } = state.userInfo && state.userInfo.personal_details;
  return {
		name:  first_name
	};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
	{ fetchData },
    dispatch
  );
}
export default connect(mapStateToProps, null)(Nav);

