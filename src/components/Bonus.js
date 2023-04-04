import { incrementBonus } from '../components/actions'
import { useDispatch, useSelector } from 'react-redux';
const Bonus = () => {
    const points = useSelector(state => state.bonus.points)
    const amount=useSelector(state=>state.account.amount)
    const dispatch = useDispatch()
    return (
        <>
            <div className="Bonus">
                <h4>Bonus Components:</h4>
                <p>points:{points}</p>
                <p>Amount:{amount}</p>

                <button onClick={() => dispatch(incrementBonus())}>Increment:+</button>
            </div>
        </>
    )
}

export default Bonus;
