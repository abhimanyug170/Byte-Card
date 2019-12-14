import React, { Component } from 'react';
import '../stylesheets/FabButton.css';
import Qr from 'react-qr-reader';

class FabButton extends Component {
	onClick = () => {
		this.props.history.push('/qrread');
	};

	render() {
		return (
			<div style={{ bottom: '100px', left: '85%', position: 'fixed' }}>
				<div className="fabContainer">
					<div className="faButton" id="fab" onClick={this.onClick}>
						<div className="ui circular large blue icon button ">
							<i className="icon chevron qrcode" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FabButton;
