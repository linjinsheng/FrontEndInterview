import React from 'react'
class Button extends React.Component {
    constructor(props) {
      console.log('---constructor---')
        super(props);
        this.state = {
          data: 0,
          number:1
        };
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    
    setNewNumber() {
      this.setState({data: this.state.data + 1})
    }

    componentDidMount() {
      console.log('Button---Component DID MOUNT!')
      this.setState({number:3})
      console.log('Button---number---',this.state.number)
    }
    render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
          console.log('Component WILL UNMOUNT!')
    }
 
    render() {
      return (
        <div>
          <h3>数字为-----{this.props.myNumber}</h3>
        </div>
      );
    }
}

export default Button;
