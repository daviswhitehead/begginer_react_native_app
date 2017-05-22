import { createStore, applyMiddleware } from "redux";

import getRootReducer from "./reducers";

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer)
    );

    return store;
}
