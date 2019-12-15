export const setActiveTab = (index) => (dispatch) => {
	dispatch({ type: 'ACTIVE_TAB', payload: index });
};

// export const fetchsharedCards = (data) => (dispatch) => {
// 	dispatch({ type: 'ACTIVE_TAB', payload: data });
// };
