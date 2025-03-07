import React, { Component } from 'react'
//引入store，用于获取redux中保存的状态
import store from '../../redux/store'
//引入action-creator，用于创建action对象
import { createIncrementAction, createDecrementAction } from '../../redux/computer_action_creator'

export default class Computer extends Component {

    // componentDidMount() {
    //     //监控redux的状态变化，当状态变化时，会自动调用render方法
    //     store.subscribe(() => {
    //         // console.log('redux state changed', store.getState())
    //         this.forceUpdate()
    //     })
    // }

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
        store.dispatch(createIncrementAction(parseInt(value)))
    }

    // - 
    decrement = () => {
        const { value } = this.selectNum
        store.dispatch(createDecrementAction(parseInt(value)))
    }

    // odd +  
    incrementIfOdd = () => {
        const { value } = this.selectNum
        // 这里不需要使用解构赋值的原因是因为reducer中返回的就是一个值，而非一个对象(详见computer_reducer.js中的return，直接看初始init值可以更好看出返回值的类型
        const num = store.getState()
        if (num % 2 !== 0) {
            store.dispatch(createIncrementAction(parseInt(value)))
        }
        else {
            // alert('当前和不为奇数，本次操作无效')
            console.log('!!当前和不为奇数,本次操作无效!')
        }
    }

    //async
    incrementAsync = () => {
        const { value } = this.selectNum
        setTimeout(() => {
            store.dispatch(createIncrementAction(parseInt(value)))
        }, 666)
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
