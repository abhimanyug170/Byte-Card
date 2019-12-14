import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import SharedCards from './SharedCards';
import Profile from './Profile';
import MyCards from './MyCards';
import QRCode from './QRCode';
import TabGroup from './TabGroup';
import history from '../history';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/shared_cards" component={SharedCards} />
					<Route path="/profile" component={Profile} />
					<Route path="/my_cards" component={MyCards} />
					<Route path="/qrcode" component={QRCode} />
					<Route path="/" component={Home} />
				</Switch>
				<Route path="/" component={TabGroup} />
			</Router>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		activeTab: state.activeTab
	};
};

export default connect(mapStateToProps)(App);
