import React, { Component } from 'react'
// 因为现在有容器组件包裹了UI组件，所以引入父组件就行了 不要再引入UI组件了
// import Computer from './components/Computer'
import Computer from './containers/Computer'
import store from './redux/store'
export default class App extends Component {

  render() {
    return (
        <div>
          <Computer store={store}/>
        </div>
    )
  }

}
