import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsycnAction } from '../../redux/actions/computer'

class Computer extends Component {

    state = {
        bandName: "AveMujica"
    }

    // +
    increment = () => {
        const { value } = this.selectNum
        this.props.increment(value * 1)
    }

    // - 
    decrement = () => {
        const { value } = this.selectNum
        this.props.decrement(value * 1)
    }

    // odd +  
    incrementIfOdd = () => {
        const { value } = this.selectNum
        if (this.props.sum % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }

    // async-异步action
    incrementAsync = () => {
        const { value } = this.selectNum
        this.props.incrementAsync(value * 1, 666)
    }

    render() {
        // console.log("UI组件接收到的props是=>",this.props)
        return (
            <div>
                <h2>Computer组件</h2>
                <h4>当前求和为:{this.props.sum},当前人数:{this.props.howManyPeople}</h4>
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

//使用connect()()创建并暴露一个Computer的容器组件
export default connect(
    state => ({
        sum: state.sum,
        howManyPeople: state.persons.length
    }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsycnAction
    }
)(Computer)

