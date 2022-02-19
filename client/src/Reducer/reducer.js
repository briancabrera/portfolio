import * as types from "../Actions/types"

const initialState = {
    coffeeCups : 0
    }

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.MORE_COFFEE:
            return {
                coffeeCups : state.coffeeCups + 1
            }
        case types.LESS_COFFEE:
            return {
                coffeeCups : state.coffeeCups - 1
            }
        default:
            return state
    }
}