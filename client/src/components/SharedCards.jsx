import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import List from './List';

const tabs = [ 'Social', 'Professional', 'Custom' ];

class SharedCards extends Component {
	state = {
		tab: 0
	};
	onTabClick = (index) => {
		this.setState({
			tab: index
		});
	};
	render() {
		console.log(this.props.sharedCards);
		return (
			<div style={{ overflow: 'hidden', height: '130%' }}>
				<div className="ui three item menu">
					{tabs.map((tab, index) => {
						return (
							<Link
								key={index}
								className={`item ${index === this.state.tab ? 'active' : null}`}
								onClick={() => {
									this.onTabClick(index);
								}}
							>
								{tab}
							</Link>
						);
					})}
				</div>
				<List
					history={this.props.history}
					data={this.props.sharedCards}
					type="shared_cards"
					cardType={this.state.tab}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sharedCards: state.sharedCards
	};
};

export default connect(mapStateToProps)(SharedCards);
