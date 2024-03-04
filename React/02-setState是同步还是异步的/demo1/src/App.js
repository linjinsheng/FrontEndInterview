import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button id="add" onClick={this.btnChange}>+</button>
      </div>
    );
  }
  // btnChange = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   }, () => {
  //     //此时打印为 1
  //     console.log("最后this.state.count :>> ", this.state.count);
  //   });
  //   //此时打印为 0
  //   console.log("开始this.state.count :>> ", this.state.count);
  // };

  btnChange = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("setTimeout----this.state.count :>> ", this.state.count);
    }, 0);
  };

}

export default App;
