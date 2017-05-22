import { combineReducers } from "redux";
import strings from "./strings";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        strings: strings
    });
}
