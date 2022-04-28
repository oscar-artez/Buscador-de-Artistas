import { TYPES } from "../actions/artistActions";

const initialState = {
    nameActor:'Steve Buscemi',
}

export const artistReducer = (state=initialState, action) =>{
   
     switch (action.type) {
         case TYPES.SEARCH_ACTOR:{
             let newActor = action.payload
                console.log(action.payload);
         return {...state, nameActor:newActor}
         }
         case TYPES.CLEAN_SEARCH:
             return state
         default:
            return state;
     }
}
