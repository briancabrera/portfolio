import * as types from "./types";

export const moreCoffee = () => (dispatch) => {
    dispatch({
        type: types.MORE_COFFEE
    })
}

export const lessCoffee = () => (dispatch) => {
    dispatch({
        type: types.LESS_COFFEE
    })
}

