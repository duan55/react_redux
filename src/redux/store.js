/*
  该文件专用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
//引入为Computer组件服务的reducer
import computerReducer from './computer_reducer'
//引入redux-thunk，用于支持异步action
import { thunk } from 'redux-thunk'; 

//创建store对象的场合，需要传入reducer作为参数，并使用默认暴露
export default createStore(computerReducer, applyMiddleware(thunk))

// 等价于下两行代码
// const store = createStore(computerReducer)
// export default store;