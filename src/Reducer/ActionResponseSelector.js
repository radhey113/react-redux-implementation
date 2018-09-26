import { FETCH_POST, LOC_AREA } from '../Actions/Types';

let initialState = {
    activeAddress: '',
    allAddress: [],
    searchValue: ''
}

/** Set state here **/ 
export default (state = initialState, action)=>{
    
    switch(action.type){
        case FETCH_POST : 
                return {
                    ...state,
                    items: action.body
                }
        case LOC_AREA :           
             return {
                 ...state,
                 activeAddress: action.body
             }
        default:
            return state    
    }
}