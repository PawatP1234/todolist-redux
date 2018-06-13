import React, { Component } from 'react';
import List from './list.js';
import { connect } from 'react-redux';
import './css/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: ''
    };
  }
  
  handleChange (e) {
    this.setState({ test: e.target.value });
  }

  clearInput () {
    if(this.state.test === ''){
      alert('Please insert to do list')
    } else {
      this.props.ADD(this.state.test);
      this.setState({test: ''});
    }
  }

  enterKey (e) {
    if(e.key === 'Enter'){
      this.clearInput();
    }
  }

  render() {

    return(
      <div className='container'>
        <input className='inputcss' type='text' 
          placeholder='Add to do list...' value={this.state.test} 
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.enterKey.bind(this)}
        />
        <button type='submit' onClick={this.clearInput.bind(this)}>ADD LIST</button>
        <List todoList={this.props.todo.todolist}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ADD : (doList) => {
      dispatch({
        type: 'ADD',
        payload: doList,
      });
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
