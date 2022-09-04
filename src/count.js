import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Count = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()
    return (
        <div>
            {count}
            <button onClick={() => dispatch({type: 'plus'})}>+</button>
            <button onClick={() => dispatch({type: 'minus'})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        </div>
    );
};

export default Count;