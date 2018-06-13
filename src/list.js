import React, { Component } from 'react';
import './css/list.css';
import { completeList, removeList, editList } from './function';

class List extends Component{

  render() {
    const todoList = this.props.todoList
      return(
        <div className='container'>
          {todoList.map(function(todoList,index){
            return (
              <li onClick={() => completeList(index)} className='listItem' id={index} key={ index }>
                {todoList}
                <button className='listButton'onClick={() => removeList(index)} >x</button>
              </li>
            );
          })}
        </div>
      );
  }
}
export default List;
