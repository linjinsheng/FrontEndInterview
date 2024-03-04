import React from 'react'
/**
 * 
  父组件提供要传递的state数据
  给子组件添加标签属性，值是state中的数据
  子组件通过props接收父组件传来的数据
 */
  class Parent extends React.Component {
    state = {
      sonToParentVal: ''
    }
    getMessage = data => {
      console.log('父组件接收数据', data)
      this.setState({
        sonToParentVal: data
      })
    }
    render() {
      return (
        <div>
          父组件
          <div>{this.state.sonToParentVal}</div>
          <Son getM={this.getMessage} />
        </div>
      )
    }
  }
  class Son extends React.Component {
    state = {
      msg: '子组件向父组件传递数据'
    }
    handleMessage = () => {
      this.props.getM(this.state.msg)
    }
    render() {
      return (
        <div>
          <button onClick={this.handleMessage}>点击</button>
        </div>
      )
    }
  }

export default Parent;
