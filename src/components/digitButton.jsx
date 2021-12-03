import {ACTIONS} from '../App';

const digitButton = ({digit, dispatch, span}) =>{
    return(
    <button className={"calc-button "+span} onClick={() => dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}>{digit}</button>
    )
}

export default digitButton;