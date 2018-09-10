import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Content from '../../Components/Content';
import styles from './Home.css';
// import { t } from '../../Components/Languages';
import {
	sampleAction,
	inputUpdateAction,
	userInfoAction
} from '../../redux/actions/sampleAction';

class Home extends Component { 
		state	=	{	value: ""	};
		componentWillMount() {
			const { sampleAction } = this.props;
			sampleAction();
		}

		handleChange = event => {
			const { inputUpdateAction } = this.props;		
			this.setState({ value: event.target.value });
			inputUpdateAction(event.target.value);
		};

		render() {
			const { data, input } = this.props;
			const { value } = this.state;
			return (
				<div>
					<Helmet encodeSpecialCharacters>
						<title>React ServerSideRendering • Home</title>
					</Helmet>
					<div className={styles.intro}>
						<h1 className={styles.title}>Anish Corporation</h1>
						<input
							type="text"
							value={value}
							onChange={this.handleChange}
						/>
						<div className="input-value">{input}</div>
						{data && data.map((array) => {
							return (
								<div key={`array-${array.id}`}>
									<h2>{array.title}</h2>
									<p>{array.body}</p>
								</div>
							);
						})}
					</div>
				</div>
			);
		}
}

function mapStateToProps(state) {
	const { input,sample } = state.sampleReducer
	return {
		input,
		data: sample && sample.data
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sampleAction, inputUpdateAction, userInfoAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
