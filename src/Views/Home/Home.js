import React, { Component} from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import styles from './Home.css';
import { t } from '../../Components/Languages';
import {
  sampleAction,
  inputUpdateAction,
  userInfoAction
} from "../../redux/actions/sampleAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Home extends Component {
  //https://anishmprasad.com/sample.json
  state = { value: "" };
  componentWillMount() {
    console.log("componentWillMount", this.props);
	  this.props.sampleAction();
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.inputUpdateAction(event.target.value);
  };

  render() {
    return (
      <div>
        <Helmet encodeSpecialCharacters={true}>
          <title>React ServerSideRendering • Home</title>
        </Helmet>
        <div className={styles.intro}>
          <h1 className={styles.title}>Anish Corporation</h1>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-value">{this.props.input}</div>
          {this.props.data &&
            this.props.data.map((array, index) => {
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
