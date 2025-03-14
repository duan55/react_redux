import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action creator
import { createIncrementAction, createDecrementAction, createIncrementAsycnAction } from '../../redux/computer_action_creator'

class Computer extends Component {

    state = {
        bandName: "AveMujica"
    }

    // +
    increment = () => {
        const { value } = this.selectNum
        //通知redux 当前状态加上value
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
        // 这里不需要使用解构赋值的原因是因为reducer中返回的就是一个值，而非一个对象(详见computer_reducer.js中的return，直接看初始init值可以更好看出返回值的类型
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
                <h1>当前求和为:{this.props.sum}</h1>
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
    state => ({ sum: state }),
    //mapDispatchToProps的最终简化写法
    {
        //因为调用this.props.increment的场合，实际上会携带对应的参数调用createIncrementAction；至此会返回一个action对象，而react-redux经过优化会自动识别到action对象后，自动dispatch该action对象!!!!!
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsycnAction
    }
    //mapDispatchToProps的一般写法
    // dispatch => ({
    //     increment: number => dispatch(createIncrementAction(number)),
    //     decrement: number => dispatch(createDecrementAction(number)),
    //     incrementAsync: (number, delay) => dispatch(createIncrementAsycnAction(number, delay)),
    // })
)(Computer)

// 箭头函数如果参数就一个就可以不写小括号 + 箭头函数的右边函数体只有一句且就一个默认的{return 值}的形式 则可以写成一个返回的对象的形式
//映射状态
// const mapStateToProps = state => ({ sum: state })
//映射操作状态的方法
// const mapDispatchToProps = dispatch => ({
//     increment: number => dispatch(createIncrementAction(number)),
//     decrement: number => dispatch(createDecrementAction(number)),
//     incrementAsync: (number, delay) => dispatch(createIncrementAsycnAction(number, delay))
// })
//使用connect()()创建并暴露一个Computer的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(Computer)