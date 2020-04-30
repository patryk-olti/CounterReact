import React from 'react';

import Counter from './Counter';

import './CounterBox.css';

class CounterBox extends React.Component{

    state = {
        counter_max_kopalni: 20,
        counter_max_elektrowni: 50,
        counter_max_wszystkie: 70,
        timeAnimation: 1500
    }

    render(){
        return(
            <div className="counterBox">
                <Counter time={this.state.timeAnimation/this.state.counter_max_kopalni} max={this.state.counter_max_kopalni} name="kopalnia"/>
                <Counter time={this.state.timeAnimation/this.state.counter_max_elektrowni} max={this.state.counter_max_elektrowni} name="elektrownia"/>
                <Counter time={this.state.timeAnimation/this.state.counter_max_wszystkie} max={this.state.counter_max_wszystkie} name="wszystkie"/>
            </div>
        )
    }
}

export default CounterBox;