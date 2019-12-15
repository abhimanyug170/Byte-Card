import React, { Component } from 'react';
import '../stylesheets/QRCode.css';
import QR from 'qrcode.react';

class QRCode extends Component {
	render() {
		console.log(this.props.location.state.data);
		return (
			<div style={{ margin: '100px 100px' }}>
				<QR value={this.props.location.state.data} />
			</div>
		);
	}
}

export default QRCode;
