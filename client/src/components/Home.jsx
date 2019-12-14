import React, { Component } from 'react';

class Home extends Component {
	componentDidMount() {
		this.props.history.push('/shared_cards');
	}
	render() {
		return <div>Home</div>;
	}
}

export default Home;
