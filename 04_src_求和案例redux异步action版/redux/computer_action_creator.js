/**
 *  该文件专门为count组件生成action对象
 */
import { INCREMENT, DECREMENT } from './constant'
//1.0
// function createIncrementAction(data) {
//     return {
//         type: 'INCREMENT', data: data
//     }
// }

// //2.0
// function createIncrementAction(data) {
//     return {
//         type: 'INCREMENT', data
//     }
// }

// //3.0
// const createIncrementAction = (data) => ({
//    type: 'INCREMENT',
//    data
// });

//4 注意这里的{对象}需要在外部加上小括号，不然不会认为是对象，会认为这是一个函数体的外侧{}
//使用分别暴露 暴露出去
//同步action-加
export const createIncrementAction = data => ({type: INCREMENT, data});
//同步action-减
export const createDecrementAction = data => ({type: DECREMENT, data});
//异步action-加   使用了redux-thunk中间件后，以后调用
// export const createIncrementAsycnActionComplexVersion = (data,delay) => {
//     return () => {
//         setTimeout(() => {
//             //复用现有的代码
//             store.dispatch(createIncrementAction(data));
//         }, delay);    
//     }
// }

//异步action-加 
//使用了redux-thunk中间件后，以后调用 并简化了引入store.js，因为这个函数是store.dispatch调用的，而store.dispatch本身就是一个函数，因此它可以将dispatch传过来复用
// 注意这并非契科夫的枪，学了不一定要用 异步action根据实际来用
export const createIncrementAsycnAction = (data,delay) => {
    return (dispatch) => {
        setTimeout(() => {
            //复用现有的代码
            dispatch(createIncrementAction(data));
        }, delay);    
    }
}

//所谓异步action就是指返回值为一个函数，而同步action返回值为一个Object类型的一般对象
//这主要是因为函数能够开启一个异步任务