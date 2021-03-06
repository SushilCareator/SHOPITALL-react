import { ProductType } from "../../types";

const ActionTypes = {
    ADD_TO_CART: "[Cart] Add to cart",
    REMOVE_ITEM: "[Cart] Remove item",
    RESET: "[Cart] Reset",
};

const addToCart = (product: ProductType) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        product,
    };
};
const removeItem = (id: number) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        id,
    };
};

const reset = () => {
    return {
        type: ActionTypes.RESET,
    };
};

export default { ActionTypes, addToCart, removeItem, reset };
