//引入本容器组件的ui组件，即Computer的UI组件
import ComputerUI from '../../components/Computer'
//引入redux，而这里只需要引入核心的store即可，其他的部分不用  <<< 容器组件中的store不能由程序员在代码层面引入，必须在其被调用的层级以props的形式传入相应的store
// import store from '../../redux/store'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//connect()()的作用是将connect()函数的执行返回结果再次执行(注意到connect()的返回是一个函数，而connect()()的返回结果是一个container)
// const ComputerContainer = connect()(ComputerUI)
// export default ComputerContainer

//使用connect()()创建并暴露一个Computer的容器组件
export default connect()(ComputerUI)