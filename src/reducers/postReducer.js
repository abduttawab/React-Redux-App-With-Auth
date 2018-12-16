import {FETCH_POSTS, NEW_POST,SIGN_IN} from '../actions/types';

const initialState = {

items:[],
item:{}

}

export default function(state = initialState, action){

switch (action.type) {
    case FETCH_POSTS:
       
        return{
            ...state,
            items: action.payload
        }
    case NEW_POST:
    
    return{
        ...state,
        item: action.payload
    }
    case SIGN_IN:
    
    return{
        ...state,
        data: action.payload
    }

    default:
        return state;
}

}