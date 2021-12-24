import { combineReducers } from "redux";
import { StoreType } from "../../types";
import cartReducer from "./CartReducer";
import filterReducer from "./FilterReducer";
import searchReducer from "./SearchReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers<StoreType>({
    // data: reducer
    cart: cartReducer,
    userSession: userReducer,
    search: searchReducer,
    filter: filterReducer,
});

export default rootReducer;
