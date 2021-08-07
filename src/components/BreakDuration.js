import React from 'react';

function BreakDuration(props) {

    function increaseTimer() {
        if (props.breakLength === 100) {
            return;
        }

        props.increaseBreak();
    }


    function decreaseTimer() {
        if (props.breakLength === 1) {
            return;
        }

        props.decreaseBreak();
    }

    return (
        <section className="break">
            <h4>Break Duration</h4>
            <section className="break-container">
                <button disabled={props.isStart === true ? "disabled" : ""} onClick={increaseTimer}>+</button>
                <p className="dur-label">{props.breakLength}</p>
                <button disabled={props.isStart === true ? "disabled" : ""} onClick={decreaseTimer}>-</button>
            </section>
        </section>
    );  
}

export default BreakDuration;