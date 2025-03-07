/*
    1.该文件是用于创建一个为Computer组件服务的reducer,reducer的本质就是一个函数
    2.reducer函数会接收到两个参数,分别为:之前的状态(preState),和要执行的动作对象(action)
*/
import { INCREMENT, DECREMENT } from './constant'

//初始化状态
const initState = 0; 
export default function computerReducer(preState = initState, action) {
    console.log('computerReducer调用了', preState, action);
    //preState = initState 的作用同下面这行代码，不过使用形参默认值更加优雅
    // if(preState === undefined) preState = 0;

    //从action中获取type、data
    const { type, data } = action

    //因为type的种类一般都比较多，不推荐使用ifelse，使用switch来解析type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;

        //reducer中不做额外的判断等等，这些步骤应该放在组件中执行

        // case 'incrementIfOdd':
        //     return preState % 2 === 0? preState : preState + 1;

        // case 'incrementAsync':
        //     return new Promise(resolve => {
        //         setTimeout(() => {return preState + data}, 1000);
        //     });

        default:
            //无任何类型，即初始化时的调用情况
            return preState;
    }

    

}