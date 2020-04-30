import React from 'react';

import "./Counter.css";

import Number from "./Number";

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            counter_actual: 0
        }
    }
    

    counter(){
        let tmp1 = this.state.counter_actual + 1;
    
        if(tmp1 < (this.props.max+1)){
          this.setState({
            counter_actual: tmp1
          })
        }
      }
    
      componentDidMount(){
        const interval = setInterval(() => {
          this.counter()
        }, this.props.time)
    
        if(this.state.counter_actual === this.state.counter_max_kopalni){
          clearInterval(interval);
        }
    
      }

    render(){
        return(
            <div className="counterbox">
                <span>{this.props.name}</span>
                <Number number={this.state.counter_actual} />
            </div>
        )
    }
}

export default Counter;