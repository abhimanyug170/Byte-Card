export const setActiveTab = (index) => (dispatch) => {
	dispatch({ type: 'ACTIVE_TAB', payload: index });
};

export const fetchSharedCards = (data) => (dispatch) => {
	dispatch({ type: 'FETCH_SHARED_CARDS', payload: data });
};

export const fetchMyCards = (data) => (dispatch) => {
	dispatch({ type: 'FETCH_MY_CARDS', payload: data });
};

export const createSharedCard = (data) => (dispatch) => {
	console.log(data);
	dispatch({ type: 'CREATE_SHARED_CARD', payload: data });
};
