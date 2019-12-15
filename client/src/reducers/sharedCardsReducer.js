export default (
	sharedCards = [
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
	],
	action
) => {
	switch (action.type) {
		case 'FETCH_SHARED_CARDS':
			return sharedCards.push(action.payload);
		case 'CREATE_SHARED_CARD':
			let sCard = [ ...sharedCards ];
			sCard.push(action.payload);
			return sCard;
		default:
			return sharedCards;
	}
};
