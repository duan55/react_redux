import React, { Component } from 'react'
//引入store，用于获取redux中保存的状态
import store from '../../redux/store'

export default class Computer extends Component {

    //注意到使用redux的情况下，state核心数据已经交给store和reducer管理了，这里的state随便写都无所谓了
    state = {
        bandName: "AveMujica"
    }

    // + 改造前
    incrementOldVersion = () => {
        const { value } = this.selectNum
        const { num } = this.state
        this.setState({ num: num + parseInt(value) })
    }

    // +
    increment = () => {
        const { value } = this.selectNum
        //通知redux 当前状态加上value
        store.dispatch({ type: 'increment', data: parseInt(value) })
    }

    // - 
    decrement = () => {
        const { value } = this.selectNum
        const { num } = this.state
        this.setState({ num: num - parseInt(value) })
    }

    // odd +  
    incrementIfOdd = () => {
        const { value } = this.selectNum
        const { num } = this.state
        if (num % 2 !== 0) {
            this.setState({ num: num + parseInt(value) })
        }
        else {
            alert('当前和不为奇数，本次操作无效')
        }
    }

    //async
    incrementAsync = () => {
        const { value } = this.selectNum
        setTimeout(() => {
            this.setState({ num: this.state.num + parseInt(value) })
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>当前求和为: {store.getState()}</h1>
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
