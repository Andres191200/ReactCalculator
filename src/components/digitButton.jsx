import {ACTIONS} from '../App';

const digitButton = ({digit, dispatch}) =>{
    return(
    <button onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}>{digit}</button>
    )
}

export default digitButton;