import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import '../stylesheets/Card.css';

class Card extends Component {
	state = {
		open: false
	};
	handleClick = () => {
		this.setState({
			open: !this.state.open
		});
	};

	handleShareClick = () => {
		this.props.history.push({
			pathname: '/qrcode',
			state: { data: this.props.cardContent[1].value }
		});
	};
	render() {
		return (
			<div className="ui centered card" style={{ width: '95%', maxWidth: '350px', height: '30vh' }}>
				<div
					style={{
						background: `${this.props.cardType === 'Professional' ? '#673ab7' : '#f44336'}`,
						height: '50% '
					}}
				>
					<span className="menu-span item">
						<i className="left dropdown icon ellipsis vertical" onClick={this.handleClick} />
						<div
							class="left menu"
							style={{
								background: '#ffffff',
								color: 'black',
								width: '20%',
								fontFamily: "'Ubuntu', sans-serif",
								zIndex: '999',
								transform: 'translate(-100%, 200%)',
								display: `${this.state.open ? 'block' : 'none'}`
							}}
						>
							<div class="item">Delete</div>
							<div
								class="item"
								style={{
									display: `${this.props.cardType === 'my_cards' ? 'block' : 'none'}`
								}}
							>
								Edit
							</div>
						</div>
					</span>

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
						onClick={this.handleShareClick}
					>
						<i className="icon chevron share alternate" />
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
