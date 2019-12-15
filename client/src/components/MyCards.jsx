import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';

class MyCards extends Component {
	render() {
		return (
			<div style={{ overflow: 'hidden', height: '90vh', marginTop: '5vh' }}>
				<List history={this.props.history} data={this.props.myCards} type="my_cards" />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		myCards: state.myCards
	};
};

export default connect(mapStateToProps)(MyCards);
