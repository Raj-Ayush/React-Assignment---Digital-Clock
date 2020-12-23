import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.intervalId = null;
    };
    render() {

        return (
            <div className="Clock">
                <h3 id="time">{this.getTimeString()}</h3>
            </div>
        )
    }

    componentDidMount() {
        this.intervalId = setInterval(() => { 
            this.setState({
                time: new Date()
            })
        }, 1 * 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    getTimeString() {
        const currTime = this.state.time;
        const [hours, minutes, seconds] = [
            currTime.getHours(),
            currTime.getMinutes(),
            currTime.getSeconds()
        ]
        const amorPm = hours >= 12 ? "PM" : "AM";
        const twelveHrForm = (hours > 12 ? hours - 12 : hours);
        const getHrString = this.padNumberTwoDigit(twelveHrForm);
        const getMinString = this.padNumberTwoDigit(minutes);
        const getSecString = this.padNumberTwoDigit(seconds);

        // HH:MM:SS{space}PM
        const calcTime = `${getHrString}:${getMinString}:${getSecString}`;
        return calcTime;
    }
    padNumberTwoDigit(num) {
        return (num < 10 ? "0" : "") + num;
    }
}


export default App;
