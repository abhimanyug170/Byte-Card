import { combineReducers } from 'redux';
import activeTabReducer from './activeTabReducer';
import sharedCardsReducer from './sharedCardsReducer';
import myCardsReducer from './myCardsReducer';

export default combineReducers({
	activeTab: activeTabReducer,
	sharedCards: sharedCardsReducer,
	myCards: myCardsReducer
});
