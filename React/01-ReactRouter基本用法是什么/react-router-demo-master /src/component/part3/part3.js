import React, {Component} from 'react'
class Part3 extends Component {
  render() {
    const {location} = this.props
    console.log("part3 location:",this.props)
    return (<div className="App">
        this is part3

        <ul>
          <li> pathName : {location.pathname}</li>
          {/*使用match来获取参数*/}
          <li> 传递的name是 : {this.props.match.params.name}</li>
        </ul>
        <div>
          <button onClick={() => this.props.history.replace('/')}>返回首页</button>
        </div>
      </div>
    );
  }
}

export default Part3
