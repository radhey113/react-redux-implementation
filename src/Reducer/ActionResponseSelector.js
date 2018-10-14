import { FETCH_DATA, POST_DATA, DELETE_DATA } from '../Actions/Types';

let initialState = {
    activeAddress: '',
    allAddress: [],
    searchValue: ''
};

/** Set state here **/ 
export default (state = initialState, action)=>{

    console.log('ActionResponseSelectorFile: ', action);

    switch(action.type){
        case FETCH_DATA :
                return {
                    ...state,
                    items: action.body
                };
        case POST_DATA :
                return {
                    ...state,
                    activeAddress: action.body
                };
        case DELETE_DATA :
                return {
                    ...state,
                    deletePost: action.body
                };
        default:
                return state
    }
}