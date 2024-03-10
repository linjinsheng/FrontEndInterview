import React, { Component } from 'react';

class RootDemo extends Component {
  constructor(props){
    super(props);
    this.state = { count: 0};
  }

  componentDidMount() {
    this.setState({ count: this.state.count +1});
    console.log('1', this.state.count)       //  打印
    this.setState({ count: this.state.count + 1})
    console.log('2',this.state.count)       //  打印
    setTimeout(() => {
      this.setState({ count: this.state.count + 1});
      console.log('3',this.state.count)     //  打印
    }, 0);
    setTimeout(() => {
      this.setState({ count: this.state.count + 1});
      console.log('4',this.state.count)     //  打印
    }, 0);
  }

  render() {
    return <div>{this.state.count}</div>
  }
}

export default RootDemo;