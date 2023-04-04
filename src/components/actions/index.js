import axios from "axios";
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const init = 'account/init'
export const incByAmt = 'account/incrementByAmount';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulFilled = 'account/getUser/fulfilled';
export const getUserRejected = 'account/getUser/rejected';
export const inBonus = 'bonus/increment';



 export function getUserAccount(id) { //Alo use of thunk  thunk provide the flexiblity which help to handle async function and provide to parameter dispatch and global sate
    return async (dispatch, getState) => {
      try {
        dispatch(getAccountUserPending());
        const { data } = await axios.get(`http://localhost:8080/account/${id}`);
        dispatch(getAccountUserFulFilled(data.amount))
      } catch (error) {
        dispatch(getAccountUserRejected(error.message))
        
      }
    }
}
export function getAccountUserPending(){
    return({
        type:getAccUserPending,

    })
}
 
export function getAccountUserFulFilled(amount) {
    return ({
        type: getAccUserFulFilled,
        payload: amount

    })
}

 export function getAccountUserRejected(message) {
    return {
        type: getUserRejected,
        error: message
    }
}
export function decrement() {
    return {
        type: dec,
    }
}

export function incremaentByAmount(value) {
    return {
        type: incByAmt,
        payload: value
    }

}
export function increment(){
    return{
        type:inc,
    }
}
export function incrementBonus(value){
    return {type:inBonus}
}