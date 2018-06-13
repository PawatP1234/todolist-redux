import React, { Component } from 'react';
import './css/list.css';
import { completeList, removeList, editList, openEdit } from './function';

class List extends Component{
  constructor(){
    super();

    this.state = {
      todoIndex : 0
    }
  }

  test (index) {
    openEdit(index);
    this.setState({todoIndex : index});
  }

  render() {
    const { todoList, callback, indexCallback } = this.props;
    let mythis = this
      return(
        <div className='container'>
          {todoList.map(function(todoList,index){
            return (
              <li value={todoList} className='listItem' id={index} key={ index }>
                <a onClick={() => completeList(index)}>{todoList}</a>
                <button className='listButton' onClick={() => removeList(index)} >x</button>
                <button className='editButton' onClick={() => mythis.test(index)} >
                  Edit
                </button>
              </li>
            );
          })}
          <div id='formHide' className='formHide'>
            <p>Edit</p>
            <input className='inputHide' type='text' placeholder='Insert new to do...' 
              id='changeTodo'
            />
            <button onClick={() => callback(editList(), this.state.todoIndex)}>Submit</button>
          </div>
        </div>
      );
  }
}
export default List;
