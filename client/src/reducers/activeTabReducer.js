export default (activeTab = 0, action) => {
	switch (action.type) {
		case 'ACTIVE_TAB':
			return action.payload;
		default:
			return activeTab;
	}
};
