import { ADD_PERSON } from '../constant'

const initState = [{ id: "001", name: 'duan55', age: 23 }]

export default function personReducer(preState = initState, action) {
    console.log('personReducer调用了', preState, action);

    const { type, data } = action

    switch (type) {
        case ADD_PERSON:
            return {
                //新增的放前面
                persons: [data, ...preState]
            }
        default:
            return preState
    }
}
