import { Action } from "redux";
import SearchActions from "../actions/SearchAction";

// reducer(store_data,action)
// state : initialise
type IAction = {
    data: string;
} & Action;

const initialState = "";

function searchReducer(store = initialState, action: IAction) {
    switch (action.type) {
        case SearchActions.ActionTypes.UPDATE_SEARCH:
            return action.data;
        default:
            //return current_store_data;
            return store;
    }
}

export default searchReducer;
