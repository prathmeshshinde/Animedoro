import React  from 'react';
import '../App.css';
import BreakDuration from './BreakDuration';
import WorkDuration from './WorkDuration';
import Timer from './Timer';


class App extends React.Component {
  constructor () {
    super();

    this.state = {
      workDur: 60,
      breakDur: 25,
      timerMin: 60,
      isStart: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseWorkLength = this.onIncreaseWorkLength.bind(this);
    this.onDecreaseWorkLength = this.onDecreaseWorkLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMin = this.onUpdateTimerMin.bind(this);
    this.onStartTimer = this.onStartTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakDur : prevState.breakDur + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakDur: prevState.breakDur - 1
      }
    })
  }

  onIncreaseWorkLength() {
    this.setState((prevState) => {
      return {
        workDur : prevState.workDur + 1,
        timerMin: prevState.workDur + 1
      }
    })
  }

  onDecreaseWorkLength() {
    this.setState((prevState) => {
      return {
        workDur: prevState.workDur - 1,
        timerMin: prevState.workDur - 1
      }
    })
  }

  onUpdateTimerMin() {
    this.setState((prevState) => {
      return {
        timerMin: prevState.timerMin - 1
      }
    })
  }

  onToggleInterval(isWork) {
    if (isWork) {
      this.setState({
        timerMin: this.state.workDur
      })
    } else {
      this.setState({
        timerMin: this.state.breakDur
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMin: this.state.workDur
    })
  }

  onStartTimer(isStart) {
    this.setState({
      isStart: isStart
    })
  }

  render() {  
  return (
    <main className="main-container">
        <img src="/back.png" alt=""/>
        <h1>ANIMEDORO</h1>
      
      <section className="all-container">

      <BreakDuration 
      isStart={this.state.isStart}
      breakLength={this.state.breakDur} 
      increaseBreak={this.onIncreaseBreakLength} 
      decreaseBreak={this.onDecreaseBreakLength}  
      />

      <Timer 
      isStart={this.state.isStart}
      timerMin={this.state.timerMin}
      breakLength={this.state.breakDur}
      updateTimerMin={this.onUpdateTimerMin}
      toggleInterval={this.onToggleInterval}
      resetTimer={this.onResetTimer}
      onStartTimer={this.onStartTimer}
      />
  
      <WorkDuration
      isStart={this.state.isStart} 
      workLength={this.state.workDur}
      increaseWork={this.onIncreaseWorkLength}
      decreaseWork={this.onDecreaseWorkLength}
      />

      </section>
    </main>
  );
  }
}

export default App;
