import React from 'react'
/**
 * 
  父组件提供要传递的state数据
  给子组件添加标签属性，值是state中的数据
  子组件通过props接收父组件传来的数据
 */
class Parent extends React.Component {
  state = {
    childv: '父组件向子组件传值'
  }
  render() {
    return (
      <div>
        父组件
        <Son childValue={this.state.childv} />
      </div>
    )
  }
}
class Son extends React.Component {
  render() {
    return (
      <div>
        子组件-----{this.props.childValue}
      </div>
    )
  }
}

export default Parent;
