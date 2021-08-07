import React from 'react';
import {Howl, Howler} from "howler";
import DemonSlayer from "../audioclips/demonslayer.mp3";
import OnePunchMan from "../audioclips/onepunchman.mp3";


class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isWork: true,
            timerSec: 0,
            intervalId: 0
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    renderAudio = () => {
        if (this.state.isWork) {
            this.soundPlay(DemonSlayer)
        } else {
            this.soundPlay(OnePunchMan)
        }   
    }



    start() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onStartTimer(true); 
        
        this.setState({
            intervalId: intervalId
        })
    }

   

    decreaseTimer() {
        switch (this.state.timerSec) {
            case 0:
                if (this.props.timerMin === 0) {
                    if (this.state.isWork) {
                        this.setState({
                            isWork: false,
                        }); 
                        this.renderAudio();
                        this.props.toggleInterval(this.state.isWork);
                    } else {
                        this.setState({
                            isWork: true
                        });
                        this.renderAudio();
                        this.props.toggleInterval(this.state.isWork);
                    }
                } else {
                    this.props.updateTimerMin()
                    this.setState({
                    timerSec: 59
                    })
                }
                
                break;
            default:
                this.setState((prevState) =>{
                    return {
                        timerSec: prevState.timerSec - 1
                    }
                })
                break;
        }
    }

    stop() {
        clearInterval(this.state.intervalId);
        this.props.onStartTimer(false);
    }

    reset() {
        this.stop();
        this.props.resetTimer();
        this.props.onStartTimer(false); 
        this.setState({
            timerSec:0,
            isWork: true   
        });
    }
    
    render() {
        Howler.volume(1.0)
        return(
            <section className="time-cont">
                <section className="timer-container">
                    <h3>{this.state.isWork === true ? "Work": "Break"}</h3>
                    <section className="span">
                    <span className="timer">{this.props.timerMin}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSec === 0 ? "00": 
                    this.state.timerSec < 10 ? "0" + this.state.timerSec : 
                    this.state.timerSec}</span>
                    </section>
                </section>
                <section className="timer-button">
                    <button onClick={this.reset}>Reset</button>
                    <section className="start-button">
                    <button disabled={this.props.isStart ? "disabled" : ""} onClick={this.start}>Start</button>
                    </section>
                    <button onClick={this.stop}>Stop</button>
                </section>
            </section>
        )
    }
}

export default Timer;