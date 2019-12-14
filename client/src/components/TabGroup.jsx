import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setActiveTab } from '../actions';
import '../stylesheets/TabGroup.css';

const tabs = [ 'Shared Cards', 'Profile', 'My Cards' ];

class TabGroup extends Component {
	onTabClick = (index) => {
		this.props.setActiveTab(index);
		if (index === 0) {
			this.props.history.push('/shared_cards');
		} else if (index === 1) {
			this.props.history.push('/profile');
		} else {
			this.props.history.push('/my_cards');
		}
	};

	render() {
		return (
			<div className="ui three item menu bottom fixed">
				{tabs.map((tab, index) => {
					return (
						<Link
							key={index}
							className={`item ${index === this.props.activeTab ? 'active' : null}`}
							onClick={() => {
								this.onTabClick(index);
							}}
						>
							{tab}
						</Link>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		activeTab: state.activeTab
	};
};

export default connect(mapStateToProps, { setActiveTab })(TabGroup);
