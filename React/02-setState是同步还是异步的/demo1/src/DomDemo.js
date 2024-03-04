import React, { Component } from 'react';

class DomDemo extends Component {

  state = {
    data: 0,
  };
  
  componentDidMount() {
    const _this = this;
    const dom = document.getElementById('test');
    //添加button的点击监听事件
    dom.addEventListener('click', function() {
      _this.setState({
        data: _this.state.data + 1,
      });
      console.log('this.state.data', _this.state.data);   //此时可以立刻同步拿到变化后的值
    });
  }

  render() {
    return (
      <div>
         <div>在react的原生事件中是同步</div>
        <button id={'test'}>点击{this.state.data}</button>
      </div>
    );
  }
}

export default DomDemo;