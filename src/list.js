import React, { Component } from 'react';

class List extends Component{
  render() {
    const todoList = this.props.todoList
      return(
        <div>
          <ul>
            {todoList.map(function(todoList,index){
              return <li key={ index }>{todoList}</li>;
            })}
          </ul>
        </div>
      );
  }
}
export default List;
