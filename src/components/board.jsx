import React, { useState } from "react";
import Square from "./square";

const Board = () => {
    const [state , setState]= useState(Array(9).fill(null));

    const [isOTurn, setIsOTurn]=useState(true);

    const handleClick = (index)=>{
        const copyState = [...state];
        copyState[index]= isOTurn ? 'O': 'X';
        setState(copyState);
        setIsOTurn(!isOTurn);

    }

    return(
        <div className="board-container">
            <div className="row">
                <Square onClick={()=>handleClick(0)} value={state[0]}/>
                <Square onClick={()=>handleClick(1)} value={state[1]}/>
                <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Square onClick={()=>handleClick(4)} value={state[4]}/> 
                <Square onClick={()=>handleClick(3)} value={state[3]}/>
                <Square onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Square onClick={()=>handleClick(6)}value={state[6]}/>
                <Square onClick={()=>handleClick(7)}value={state[7]}/>
                <Square onClick={()=>handleClick(8)}value={state[8]}/>
            </div>

        </div>
    )
}

export default Board;