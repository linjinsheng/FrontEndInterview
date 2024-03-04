import React, {Component} from 'react'

class Async extends Component {
  state = {
    num: 0
  }

  onClick = () => {
    console.log('更新前, num:', this.state.num);
    this.setState({
      num: this.state.num + 1
    })
    console.log('更新后, num:', this.state.num);
  }

  //  https://juejin.cn/post/6959885030063603743
  render() {
    const {num} = this.state;
    return (
      <div>
        <p>{num}</p>
        <button onClick={this.onClick}>+1</button>
      </div>
    );
  }
}

export default Async
