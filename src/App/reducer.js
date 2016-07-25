import * as Suggest from '../Suggest';
import {combineReducers} from "redux";

export default combineReducers({suggest: Suggest.reducer});