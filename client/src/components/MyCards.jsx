import React, { Component } from 'react';
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
		name: 'Nandi',
		phone: 'bnmm',
		email: 'vbhn',
		github: 'bnbnmm',
		facebook: 'hvjbkjlkl'
	}
];

class MyCards extends Component {
	render() {
		return (
			<div style={{ overflow: 'hidden', height: '90vh', marginTop: '5vh' }}>
				<List history={this.props.history} data={data} type="my_cards" />
			</div>
		);
	}
}

export default MyCards;
