import { CartType, ProductType } from "../../types";
import { Action } from "redux";
import CartActions from "../actions/CartActions";

type IAction = {
    product: ProductType;
    id: number;
} & Action;

function cartReducer(store: CartType[] = [], action: IAction) {
    switch (action.type) {
        case CartActions.ActionTypes.ADD_TO_CART:
            return [...store, { ...action.product, productQty: 1 }];
        case CartActions.ActionTypes.REMOVE_ITEM:
            return store.filter((prod) => prod.id !== action.id);

        case CartActions.ActionTypes.RESET:
            return [];
        default:
            return store;
    }
}
export default cartReducer;
