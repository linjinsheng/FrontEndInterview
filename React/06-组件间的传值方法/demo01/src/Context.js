import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 顶级公共组件
class Context extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }
    setValue = value => {
        this.setState({
            value,
        })
    }
    // 必须，声明了子组件才能获取上下文（this.context）
    getChildContext() { 
        return {
            value: this.state.value,
            setValue: this.setValue,
        };
    }
    render() {
        return (
            <div>
                <AParent />
                <BParent />
            </div>
        );
    }
}
// 必需
Context.childContextTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
};

// A 的 parent
class AParent extends Component {
    render() {
        return (
            <div className="card">
                <A />
            </div>
        );
    }
}
// A
class A extends Component {
    render() {
        const { setValue } = this.context;
        return (
            <div>
                我是parentA 下的 A, <input onChange={
                    (e) => {
                        this.value = e.target.value
                        setValue(this.value)
                    }
                } />
            </div>
        );
    }
}
// 必需
A.contextTypes = {
    setValue: PropTypes.func,
};

// B 的 parent
class BParent extends Component {
    render() {
        return (
            <div className="card">
                <B />
            </div>
        );
    }
}
// B
class B extends Component {
    render() {
        return (
            <div>
                我是parentB 下的 B, value是：
                {this.context.value}
            </div>
        );
    }
}
B.contextTypes = {
    value: PropTypes.string,
};


export default Context;