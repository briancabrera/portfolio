import * as types from "./types";
import { useDispatch } from "react-redux";

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

export const setIntroDialogue = () => (dispatch) => {
    dispatch({
        type: types.SET_INTRO_DIALOGUE
    })
}

