import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import '../stylesheets/Card.css';

class Card extends Component {
	render() {
		return (
			<div className="ui centered card" style={{ width: '95%', maxWidth: '350px', height: '30vh' }}>
				<div
					style={{
						background: `${this.props.cardType === 'Professional' ? '#673ab7' : '#f44336'}`,
						height: '50% '
					}}
				>
					<span className="menu-span menu">
						<i className="left dropdown icon ellipsis vertical" />
					</span>
					<div
						className="left menu"
						style={{ position: 'fixed', color: '#000000', transform: 'translate(200%, -50%)' }}
					>
						<div className="item">9</div>
					</div>

					<img src={avatar} alt="avatar" className="ui avatar image" id="defImage" />
					<div className="content">
						<h3 class="header cardContentHeader" style={{ textAlign: 'center' }}>
							{this.props.cardContent[1].value}
						</h3>
						<div
							className="status"
							style={{ color: `${this.props.cardType === 'Professional' ? '#4a148c' : '#b71c1c'}` }}
						>
							HR at Innovaccer
						</div>
					</div>
					<div
						className="ui circular large orange icon button"
						style={{ transform: 'translate(780%, -250%)' }}
					>
						<i className="icon chevron share alternate" />
					</div>
				</div>
				{/* <div className="ui right fixed button" onClick={this.onClick}>
					<div className="ui circular large blue icon button ">
						<i className="icon chevron qrcode" />
					</div>
				</div> */}
			</div>
		);
	}
}

export default Card;
