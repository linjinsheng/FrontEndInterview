import React, {Component} from 'react'
// import {} from 'react-router-dom'
class Part2Model1 extends Component {
  render() {
    return (<div className="App">
        this is a model1 in part2
        <div>
          <button onClick={() => this.props.history.goBack()}>返回上一页</button>
        </div>
        <div>
          <button onClick={() => this.props.history.replace('/part2')}>返回part2</button>
        </div>
      </div>
    );
  }
}

export default Part2Model1
