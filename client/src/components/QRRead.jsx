import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QRRead extends Component {
	state = {
		result: null
	};

	componentDidUpdate() {
		console.log(this.state.result);
		this.props.history.push('/');
	}

	handleScan = (data) => {
		if (data) {
			this.setState({
				result: data
			});
		}
	};
	handleError = (err) => {
		console.error(err);
	};
	render() {
		return (
			<div>
				<QrReader delay={300} onError={this.handleError} onScan={this.handleScan} style={{ width: '100%' }} />
				<p>{this.state.result}</p>
			</div>
		);
	}
}

export default QRRead;
