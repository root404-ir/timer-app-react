import React from "react";
import './timer.css';
let interval;
class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false
        }
    }
    start = () => {
        if (this.state.isStart === false) {
            this.setState({
                isStart: true
            })
            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1
                })
                if (this.state.second === 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1
                    })
                }
                if (this.state.minute === 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1
                    })
                }
            }, 1000)
        }
    }
    stop = () => {
        this.setState({
            isStart: false
        })
        clearInterval(interval)
    }
    reset = () => {
        this.stop()
        this.setState({
            hour: 0,
            minute: 0,
            second: 0
        })
    }
    render() {
        let h = this.state.hour
        let m = this.state.minute
        let s = this.state.second
        return (
            <div className="conteiner">
                <p></p>
                <h3 className="timer">
                    {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}
                </h3>
                <div className="button_conteiner">
                    <button onClick={this.start}>start</button>
                    <button onClick={this.stop}>stop</button>
                    <button onClick={this.reset}>reset</button>
                    <button>bg</button>
                </div>
            </div>
        )
    }
}
export default Timer