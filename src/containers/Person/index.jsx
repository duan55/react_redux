import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    // id赋值nanoid
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    // 清空输入框
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  //键入回车直接搜索
  searchTrigger = (event) => {
    const { key, target } = event
    //检测到'回车'
    if (key === 'Enter') {
      //去完空格之后如果无实质内容则报错提示
      // if (target.value.trim() === '') {}
      if (this.ageNode.value === '') return;
      if (this.nameNode.value === '') {
        alert('!!输入必须都不为空!')
        return;
      }
      this.addPerson()
    }
  }

  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <h4>计算器合计值为:{this.props.sum}</h4>
        <input ref={x => this.nameNode = x} type="text" placeholder='请输入名字' onKeyUp={this.searchTrigger} />
        <input ref={x => this.ageNode = x} type="text" placeholder='请输入年龄' onKeyUp={this.searchTrigger} />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map(p => {
              return <li key={p.id}>姓名:{p.name}-年龄:{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons: state.persons,
    sum: state.sum
  }),
  {
    addPerson: addPersonAction
  }
)(Person)

