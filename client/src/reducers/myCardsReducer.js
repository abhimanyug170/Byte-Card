export default (
	myCards = [
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
	],
	action
) => {
	switch (action.type) {
		case 'FETCH_MY_CARDS':
			return myCards.push(action.payload);
		default:
			return myCards;
	}
};
