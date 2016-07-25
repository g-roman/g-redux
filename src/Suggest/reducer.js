import {initialState} from './model';
import * as actions from './actions';

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.FOCUS:
			return {
				...state,
				focus: true
			};
		case actions.VALUE_UPDATE:
			return {
				...state,
				value: action.payload
			};
		default:
			return state;
	}
}