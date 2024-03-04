import React, { Component } from 'react';

class OnClickDemo extends Component {

  state = {
    data: 0,
  };

  clickTest = () => {
    this.setState({
      data: this.state.data + 1,
    });
    console.log('this.state.data', this.state.data);   //拿到的是上一次的data值
  };

  render() {
    return (
      <div>
        <div>在react的合成事件中是异步</div>
        <button onClick={this.clickTest}>点击{this.state.data}</button>
      </div>
    );
  }
}

export default OnClickDemo;
