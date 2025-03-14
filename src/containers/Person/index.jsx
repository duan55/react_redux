import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    // id赋值nanoid
    const personObj = { id: nanoid(), name, age }
    console.log(personObj)
  }

  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <input ref={x => this.nameNode = x} type="text" placeholder='请输入名字' />
        <input ref={x => this.ageNode = x} type="text" placeholder='请输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}
