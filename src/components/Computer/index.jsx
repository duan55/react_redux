import React, { Component } from 'react'

export default class Computer extends Component {
    
    state = {
        num: 0
    }

    // +
    increment = () => {
       const {value} = this.selectNum 
       const {num} = this.state
       this.setState({num: num + parseInt(value)})
    }

    // - 
    decrement = () => {
        const {value} = this.selectNum 
        const {num} = this.state
        this.setState({num: num - parseInt(value)})
    }

    // odd +  
    incrementIfOdd = () => {
        const {value} = this.selectNum 
        const {num} = this.state
        if(num % 2!== 0){
            this.setState({num: num + parseInt(value)})
        }
        else{
            alert('当前和不为奇数，本次操作无效')
        }
    }

    //async
    incrementAsync = () => {
        const {value} = this.selectNum
        setTimeout(() => {
            this.setState({num: this.state.num + parseInt(value)})
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>当前求和为: {this.state.num}</h1>
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
