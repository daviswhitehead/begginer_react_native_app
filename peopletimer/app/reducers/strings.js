import * as Types from '../actions/types'

const initialState = {};

export default function strings(state = initialState, action) {
    switch (action.type) {
        case Types.SAY_HELLO :
            return {
                ...state,
                sayHello : action.sayHello
            }
        default:
            return state;
    }
};
