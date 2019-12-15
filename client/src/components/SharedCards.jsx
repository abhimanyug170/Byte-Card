import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List';

const data = [
	{
		type: 'Professional',
		name: 'Nandi',
		phone: 'bnmm',
		email: 'vbhn',
		github: 'bnbnmm',
		linkedIn: 'hvjbkjlkl'
	},

	{
		type: 'Custom',
		name: 'Abhimanyu',
		phone: 'bnmm',
		email: 'vbhn',
		github: 'bnbnmm',
		facebook: 'hvjbkjlkl'
	},
	{
		type: 'Personal',
		name: 'Nandi',
		phone: 'bnmm',
		email: 'vbhn',
		instagram: 'bnbnmm',
		facebook: 'hvjbkjlkl'
	},
	{
		type: 'Personal',
		name: 'Nandi',
		phone: 'bnmm',
		email: 'vbhn',
		instagram: 'bnbnmm',
		facebook: 'hvjbkjlkl'
	},
	{
		type: 'Professional',
		name: 'Nandi',
		phone: 'bnmm',
		email: 'vbhn',
		github: 'bnbnmm',
		linkedIn: 'hvjbkjlkl'
	},
	{
		type: 'Personal',
		name: 'Nandi',
		phone: 'bnmm',
		email: 'vbhn',
		instagram: 'bnbnmm',
		facebook: 'hvjbkjlkl'
	}
];

const tabs = [ 'Personal', 'Professional', 'Custom' ];

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
				<List history={this.props.history} data={data} type="shared_cards" cardType={this.state.tab} />
			</div>
		);
	}
}

export default SharedCards;
