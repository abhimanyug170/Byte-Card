export const setActiveTab = (index) => (dispatch) => {
	dispatch({ type: 'ACTIVE_TAB', payload: index });
};
