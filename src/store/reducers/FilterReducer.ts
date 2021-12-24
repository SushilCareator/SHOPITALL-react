import { Action } from "redux";
import FilterActions from "../actions/FilterAction";

interface IAction extends Action {
    price?: [];
}

const initialState = { price: [0, 50000] };

function filterReducer(storeData = initialState, action: IAction): any {
    console.log(action.price, "price 1");

    switch (action.type) {
        case FilterActions.ActionTypes.ADD_PRICE:
            return { price: action.price };

        default:
            return storeData;
    }
}
export default filterReducer;
