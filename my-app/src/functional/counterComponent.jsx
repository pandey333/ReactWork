import React from "react";
class Counter2 extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
  
    // change code below this line
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    // change code above this line
    render() {
      return (
  
     <div className="rajat">
     <button className='inc' onClick={() => this.increment()}>+</button>
      <button className='dec' onClick={() => this.decrement()}>-</button>
      <button className='reset' onClick={() => this.reset()}>Reset</button>
      <h1>Current Count: {this.state.count}</h1>
    </div>
      );
    }
  };
  export default Counter2;