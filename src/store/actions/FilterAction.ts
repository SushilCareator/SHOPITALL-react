const ActionTypes = {
    ADD_PRICE: "[fromPrice,toPrice] Add Price",
    SIGN_IN_ERROR: "[User] Login error",
    SIGN_OUT: "[User] Logout",
};

const addPrice = (price: number | number[]) => {
    return {
        type: ActionTypes.ADD_PRICE,
        price,
    };
};
const loginError = (error: string) => {
    return {
        type: ActionTypes.SIGN_IN_ERROR,
        error,
    };
};
const logout = () => {
    return { type: ActionTypes.SIGN_OUT };
};

const FilterActions = { loginError, addPrice, logout, ActionTypes };

export default FilterActions;
