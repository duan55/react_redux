import { INCREMENT, DECREMENT } from '../constant'

//function createIncrementAction(data) {return {type: 'INCREMENT', data: data}}

//同步action-加
export const createIncrementAction = data => ({type: INCREMENT, data});
//同步action-减
export const createDecrementAction = data => ({type: DECREMENT, data});

//异步action-加 
export const createIncrementAsycnAction = (data,delay) => {
    return (dispatch) => {
        setTimeout(() => {
            //复用现有的代码
            dispatch(createIncrementAction(data));
        }, delay);    
    }
}