import React from 'react';
import ReactDOM from 'react-dom';

// class component
class Main extends React.Component {
  state = {
    counter : 0
  }
  // increase arror function
  increase = ()=> {
    this.setState({counter: this.state.counter+1})
  }
  // decrease arror function
  decrease = ()=> {
    this.setState({counter: this.state.counter-1})
  } 
  render() {   
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increase}>INCREASE</button>
      <button onClick={this.decrease}>DECREASE</button>
      
    
    </div>
  }
}

const main = <Main />
ReactDOM.render(main, document.getElementById("root"))