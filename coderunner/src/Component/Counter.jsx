import React from "react";
import { useState } from "react";
import "../CSS/Counter.css";

const Counter = () => {

    const [counter,setCounter] = useState(0);

    return (
        <div className="Box">
            <div className="Container">
                <p className="Count">{counter}</p>
            </div>
            <div className="Button-list">
                <button onClick={()=>{setCounter(counter-1);}} className="Button"> - </button>
                <button onClick={()=>{setCounter(0);}} className="Button"> Reset </button>
                <button onClick={()=>{setCounter(counter+1);}} className="Button"> + </button>
            </div>
        </div>
    );
}

export default Counter;