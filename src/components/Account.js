import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { incremaentByAmount, increment, decrement, getUserAccount } from '../components/actions'
const Account = () => {

    const [value, setValue] = useState(0)
    const amount = useSelector(state => state.account.amount)
    const points = useSelector(state => state.bonus.points)
    const dispatch = useDispatch()

    return (
        <>
            <div className="Account">
                <h3>Account Component:</h3>
                <p> Amount:{amount}</p>
                <p>Points:{points}</p>

                <button onClick={() => dispatch(increment())}>Increment +</button>
                <button onClick={() => dispatch(decrement())}>Decerement -</button>
                <input type="text" name='value' onChange={(e) => setValue(+e.target.value)} />
                <button onClick={() => dispatch(incremaentByAmount(value))}>IncrementBy :{value}</button>
                <button onClick={() => dispatch(getUserAccount(1))}>Init Account</button>

            </div>



        </>
    )
}

export default Account
