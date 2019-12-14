import React, { Component } from 'react';
import '../stylesheets/List.css';
import Card from './Card';

class List extends Component {
	render() {
		if (this.props.type === 'shared_cards')
			if (this.props.cardType === 0) {
				return (
					<div>
						{this.props.data.map((item) => {
							if (item.type === 'Personal') {
								let array = [];
								{
									Object.keys(item).forEach(function(key) {
										array.push({
											key: key,
											value: item[`${key}`]
										});
									});
								}
								return <Card cardContent={array} />;
							} else return null;
						})}
					</div>
				);
			} else if (this.props.cardType === 1) {
				return (
					<div>
						{this.props.data.map((item) => {
							if (item.type === 'Professional') {
								let array = [];
								{
									Object.keys(item).forEach(function(key) {
										array.push({
											key: key,
											value: item[`${key}`]
										});
									});
								}
								return <Card cardContent={array} />;
							} else return null;
						})}
					</div>
				);
			} else {
				return (
					<div>
						{this.props.data.map((item) => {
							if (item.type === 'Custom') {
								let array = [];
								{
									Object.keys(item).forEach(function(key) {
										array.push({
											key: key,
											value: item[`${key}`]
										});
									});
								}
								return <Card cardContent={array} />;
							} else return null;
						})}
					</div>
				);
			}
		else
			return (
				<div>
					{this.props.data.map((item) => {
						let array = [];
						{
							Object.keys(item).forEach(function(key) {
								array.push({
									key: key,
									value: item[`${key}`]
								});
							});
						}
						return <Card cardContent={array} />;
					})}
				</div>
			);
	}
}

export default List;
