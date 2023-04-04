import {
    getAccUserFulFilled,
    getAccountUserRejected,
    incByAmt,
    getAccUserPending,
    inc,
    dec,
    init
} from "../actions" 
export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserFulFilled:
            // immutablity
            return {
                amount: action.payload, pending: false
            }
        case getAccountUserRejected:
            return {
                ...state, error: action.error, pending: false
            }
            case dec:
                return{
                    amount:state.amount-1
                }

        case incByAmt:
            return {
                incremaentByAmount: state.amount + action.payload
            }
        case getAccUserPending:
            return {
                ...state, pending: true
            }
        case inc:
            return {
                amount: state.amount + 1
            }
        case init:
            return {
                amount: action.payload
            }
        default:
            return state
    }

}