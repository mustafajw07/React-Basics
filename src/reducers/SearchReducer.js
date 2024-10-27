import { ADD_INPUT } from "../constants/searchConstants"

const initialState = {input : ''}

export const searchInputReducer = (state =  initialState, action) => {
    if(action.type === ADD_INPUT){
        return {
            input : action.payload.input
        }
    }
    return state;
}

