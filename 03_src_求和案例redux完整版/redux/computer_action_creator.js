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
//加
export const createIncrementAction = data => ({type: INCREMENT, data});
//减
export const createDecrementAction = data => ({type: DECREMENT, data});