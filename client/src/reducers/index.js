import { combineReducers } from 'redux';
import activeTabReducer from './activeTabReducer';

export default combineReducers({
	activeTab: activeTabReducer
});
