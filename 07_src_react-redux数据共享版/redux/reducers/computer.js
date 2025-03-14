/*
    1.该文件是用于创建一个为Computer组件服务的reducer,reducer的本质就是一个函数
    2.reducer函数会接收到两个参数,分别为:之前的状态(preState),和要执行的动作对象(action)
*/
import { INCREMENT, DECREMENT } from '../constant'

//初始化状态
const initState = 0;
export default function computerReducer(preState = initState, action) {
    // console.log('computerReducer调用了', preState, action);

    const { type, data } = action

    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            //无任何类型，即初始化时的调用情况
            return preState;
    }
}