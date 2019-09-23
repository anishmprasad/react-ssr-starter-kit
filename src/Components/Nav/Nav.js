import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
import styles from './Nav.css';
import logo from '../../assets/images/logo.svg';
import { InitialAction } from '../../redux/actions/initialAction';

// import {
//   userInfoAction
// } from '../../redux/actions/sampleAction';
// import { fetchData } from '../../redux/store/store';

function Nav(props) {
	const { name } = props;
	return (
		<div className={styles.navigation}>
			<Link to='/' className={styles.logo}>
				<img src={logo} alt='Logo' />
				<span>React Serverside rendering</span>
			</Link>
			<ul className={styles.menu}>
				<li>
					<NavLink to='/about' activeClassName={styles.active}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to='/article' activeClassName={styles.active}>
						Article
					</NavLink>
				</li>
				<li>
					<NavLink to='/profile' activeClassName={styles.active}>
						Profile
					</NavLink>
				</li>
				<li>{name}</li>
			</ul>
		</div>
	);
}
// Nav.getInitialBeforeRender = () => InitialAction();

function mapStateToProps(state) {
	console.log('mapStateToProps', state);
	const { first_name: firstName } = state.userInfo && state.userInfo.personal_details;
	return {
		name: firstName
	};
}
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(
// 		{ fetchData },
//     dispatch
//   );
// }
export default connect(
	mapStateToProps,
	null
)(Nav);
