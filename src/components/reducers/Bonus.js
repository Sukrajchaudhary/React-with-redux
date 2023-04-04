import { incByAmt, inBonus } from "../actions"
export function bounsReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case inBonus:
            return { points: state.points + 1 }
        // immutablity
        case incByAmt:
            if (action.payload >= 100) {
                return { points: state.points + 1 }
            }

        default:
            return state
    }
}