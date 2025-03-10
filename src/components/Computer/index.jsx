import React, { Component } from 'react'

export default class Computer extends Component {

    state = {
        bandName: "AveMujica"
    }

    // +
    increment = () => {
        const { value } = this.selectNum
        //通知redux 当前状态加上value

    }

    // - 
    decrement = () => {
        const { value } = this.selectNum

    }

    // odd +  
    incrementIfOdd = () => {
        const { value } = this.selectNum
        // 这里不需要使用解构赋值的原因是因为reducer中返回的就是一个值，而非一个对象(详见computer_reducer.js中的return，直接看初始init值可以更好看出返回值的类型

    }

    // async-异步action
    incrementAsync = () => {
        const { value } = this.selectNum

    }

    render() {
        return (
            <div>
                <h1>当前求和为:???</h1>
                <select ref={i => this.selectNum = i}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>和为奇数执行+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步等待执行+</button>
            </div>
        )
    }
}
