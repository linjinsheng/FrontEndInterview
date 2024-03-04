import React, { Component } from 'react';
/**
 * 将状态共享，提升到最近的公共父组件中，由父组件管理状态
   提升公共状态
   提供操作共享状态的方法
 */
 class Parent extends React.Component {
    //共享状态
    state = {
      count: 0
    }
    // 操作共享状态的方法
    add = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
    render() {
      return (
        <div>
          <C1 count={this.state.count} ></C1>
          <C2 add={this.add} ></C2>
        </div>
  
      )
    }
  }
  // 数据展示
  const C1 = (props) => {
    return (
      <div>{props.count}</div>
    )
  
  }
  // 逻辑操作
  const C2 = (props) => {
    return (
      <div>
        <button onClick={() => { props.add() }}>我是按钮+1</button>
      </div>
    )
  }

export default Parent;