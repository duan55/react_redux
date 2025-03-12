//引入本容器组件的ui组件，即Computer的UI组件
import ComputerUI from '../../components/Computer'
//引入redux，而这里只需要引入核心的store即可，其他的部分不用  <<< 容器组件中的store不能由程序员在代码层面引入，必须在其被调用的层级以props的形式传入相应的store
// import store from '../../redux/store'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//引入action creator
import { createIncrementAction, createDecrementAction, createIncrementAsycnAction } from '../../redux/computer_action_creator'


//connect()()的作用是将connect()函数的执行返回结果再次执行(注意到connect()的返回是一个函数，而connect()()的返回结果是一个container)
// const ComputerContainer = connect()(ComputerUI)
// export default ComputerContainer

//使用connect()()创建并暴露一个Computer的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(ComputerUI)

//func1函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value - 此处传的是 状态
function mapStateToProps(state) {
    return { sum: state }
}

//func2函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value - 此处传的是 操作状态的方法
// function func2() {
//     return {
//         increment: (number) => {
//             //通知redux执行加法操作
//             store.dispatch({ type: INCREMENT, data: number })
//         }
//     }
// }

//注意到func2中一定会用到store.dispatch，因此react-redux会直接将dispatch传入到func2中，故可以省略引入： import store from '../../redux/store'
function mapDispatchToProps(dispatch) {
    return {
        increment: (number) => {
            //通知redux执行加法操作
            dispatch(createIncrementAction(number))
        },
        decrement: (number) => {
            //通知redux执行减法操作
            dispatch(createDecrementAction(number))
        },
        incrementAsync: (number, delay) => {
            //通知redux执行异步加法操作
            dispatch(createIncrementAsycnAction(number, delay))
        }
    }
}

/**
 * 小结：
 * 1.mapStateToProps(mapDispatchToProps)函数返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value
 * 3.mapStateToprops(mapDispatchToProps)用于传递状态(传递操作状态的方法)
 * */