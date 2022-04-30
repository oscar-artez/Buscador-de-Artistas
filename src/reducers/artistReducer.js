import { TYPES } from "../actions/artistActions";

const initialState = {
    nameActor:'',
}

export const artistReducer = (state=initialState, action) =>{
   
     switch (action.type) {
         case TYPES.SEARCH_ACTOR:
         return {...state, nameActor:action.payload}
         
         case TYPES.CLEAN_SEARCH:
             return {...state, initialState}
         default:
            return state;
     }
}
