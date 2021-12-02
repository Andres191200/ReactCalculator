import {ACTIONS} from '../App';

const digitOperator = ({operator, dispatch}) =>{
    return(
    <button className="calc-button" onClick={() => dispatch({type: ACTIONS.ADD_OPERATOR, payload:{operator}})}>{operator}</button>
    )
}

export default digitOperator;