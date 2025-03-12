//引入本容器组件的ui组件，即Computer的UI组件
import ComputerUI from '../../components/Computer'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action creator
import { createIncrementAction, createDecrementAction, createIncrementAsycnAction } from '../../redux/computer_action_creator'

//使用connect()()创建并暴露一个Computer的容器组件
export default connect(
    state => ({ sum: state }),
    //mapDispatchToProps的最终简化写法
    {
        //因为调用this.props.increment的场合，实际上会携带对应的参数调用createIncrementAction；至此会返回一个action对象，而react-redux经过优化会自动识别到action对象后，自动dispatch该action对象!!!!!
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsycnAction
    }
    //mapDispatchToProps的一般写法
    // dispatch => ({
    //     increment: number => dispatch(createIncrementAction(number)),
    //     decrement: number => dispatch(createDecrementAction(number)),
    //     incrementAsync: (number, delay) => dispatch(createIncrementAsycnAction(number, delay)),
    // })
)(ComputerUI)


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
// export default connect(mapStateToProps, mapDispatchToProps)(ComputerUI)