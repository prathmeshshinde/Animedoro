import React from 'react';

function WorkDuration(props) {


    function increaseWorkTimer() {
        if (props.workLength === 100) {
            return;
        }

        props.increaseWork();
    }


    function decreaseWorkTimer() {
        if (props.workLength === 1) {
            return;
        }

        props.decreaseWork();
    }

    return(
        <section>
            <h4>Work Duration</h4>
            <section className="work-container">
                <button disabled={props.isStart === true ? "disabled" : ""} onClick={increaseWorkTimer}>+</button>
                <p className="dur-label">{props.workLength}</p>
                <button disabled={props.isStart === true ? "disabled" : ""} onClick={decreaseWorkTimer}>-</button>
            </section>
        </section>
    );
}

export default WorkDuration;