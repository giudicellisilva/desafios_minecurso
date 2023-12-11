import React, { useEffect, useState } from "react";

const Counter = (props) =>{
    const [count, setCount] = useState(props.valueInitial);
    const [history, setHistory] = useState([])
    const [historyResult, setHistoryResult] = useState([])
    const [valueMaxMin, setValuteMaxMin] = useState("");

    function increment(){
        if(count + props.valueIncrement > 100){
            setValuteMaxMin("Operação exede o valor max!")
        }else{
            setValuteMaxMin("")
            setHistory([...history, `Decremet => ${count} + ${props.valueIncrement}`]);
            setCount(count + props.valueIncrement);
            setHistoryResult([...historyResult, `= ${count + props.valueIncrement}`]);
        }
    }

    function decrement(){
        if(count - props.valueIncrement <= 0){
            setValuteMaxMin("Operação inválida valor min atingido!")
        }else{
            setValuteMaxMin("")
            setHistory([...history, `Decremet => ${count} - ${props.valueIncrement}`]);
            setCount(count - props.valueIncrement);
            setHistoryResult([...historyResult, `= ${count - props.valueIncrement}`]);
        }
        
    }

    function reset(){
        setHistory([...history, `Reset => ${count} `])
        setCount(props.valueInitial);
        setHistoryResult([...historyResult, `= ${props.valueInitial}`]);
    }

    return(
        <div>
            <h2>Cont: {count}</h2>
            <h3>{valueMaxMin}</h3>
            <button onClick={ () => increment()}>Increment</button>
            <button onClick={ () => decrement()}>Decrement</button>
            <button onClick={ () => reset()} >Reset</button>
            <div>
                {history?.map((operacao, index) =>{
                    return(
                         <>
                            <p>{operacao}</p>
                            <p>{historyResult[index]}</p>
                         </>
                    )
                })}
            </div>
        </div>
    )
}

export default Counter;