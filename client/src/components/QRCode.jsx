import React, { Component } from 'react';
import '../stylesheets/QRCode.css';
import QR from 'qrcode.react';

class QRCode extends Component {
	render() {
		return (
			<div style={{ margin: '100px 100px' }}>
				<QR value="test data" />
			</div>
		);
	}
}

export default QRCode;
