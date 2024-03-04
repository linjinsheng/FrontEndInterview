import React from "react";
import ReactDOM from "react-dom";

/**
 *  https://www.jianshu.com/p/15fabae835a0  
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "alife"
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        Count: {count}
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
