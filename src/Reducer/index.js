
import { combineReducers } from 'redux';
import ActionResponseSelector from './ActionResponseSelector';

/** Manage the state using reducer function  **/ 
export default combineReducers({
    data: ActionResponseSelector
});