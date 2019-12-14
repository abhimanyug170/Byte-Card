import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import '../stylesheets/Card.css';

class Card extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="ui centered card" style={{ width: '95%', maxWidth: '350px', height: '30vh' }}>
				<div style={{ background: '#673ab7', height: '50% ' }}>
					<img src={avatar} alt="avatar" className="ui avatar image" id="defImage" />
					<div className="content">
						<h3 class="header cardContentHeader" style={{ textAlign: 'center' }}>
							{this.props.cardContent[1].value}
						</h3>
						<div className="status">HR at Innovaccer</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
