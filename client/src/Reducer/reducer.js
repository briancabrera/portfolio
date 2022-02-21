import * as types from "../Actions/types"

const initialState = {
    coffeeCups : 0,
    introDialogue: 0
    }

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.MORE_COFFEE:
            return {
                ...state,
                coffeeCups : state.coffeeCups + 1
            }
        case types.LESS_COFFEE:
            return {
                ...state,
                coffeeCups : state.coffeeCups - 1
            }
        case types.SET_INTRO_DIALOGUE:
            return {
                ...state,
                introDialogue: state.introDialogue < 6 ? state.introDialogue + 1 : state.introDialogue
            }
        default:
            return state
    }
}