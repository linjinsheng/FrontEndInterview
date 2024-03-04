import React, { Component } from 'react';
/**
 * 兄弟组件传值是通过父组件为媒介进行传值
 */
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    setValue = value => {
        this.setState({
            value
        })
    }
    render() {
        return (
            <div>
                {/* 父组件值 */}
                父组件---{this.state.value}
                {/* Son1 组件改变value的值 */}
                <Son1 setValue={this.setValue} />
                <Son2 value = {this.state.value}/>
            </div>
        );
    }
}
class Son1 extends Component {
    render() {
        // 获取父组件的setValue方法
        const { setValue } = this.props;
        return (
            <div>
                A组件
                {/* change 事件改变父组件中Value的值 */}
                <input onChange={
                    (e) => {
                        this.value = e.target.value
                        setValue(this.value)
                    }
                } />
            </div>
        );
    }
}

class Son2 extends Component {
    render() {
        //  获取父组件的value值
        let {value} = this.props
        return (
            <div>
                Son2-----{value}
            </div>
        );
    }
}
export default Parent;