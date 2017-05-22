import * as Types from './types';



function sayHello(myString) {
    return {
        type : types.SAY_HELLO,
        myString
    };
};


export function fetchMyString() {
    return function (dispatch, getState) {
        return ((myString) => dispatch(sayHello(myString)))
            .catch((err) => console.log(err));
    };
};
