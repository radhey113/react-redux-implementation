
/** Create a store here for holding the react state **/ 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/ActionResponseSelector';

const initialState = {};
const middleware = [thunk];

const Store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default Store;