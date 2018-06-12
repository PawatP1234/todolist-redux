import React, { Component } from 'react';
import List from './list.js';
import { connect } from 'react-redux';

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
    this.props.ADD(this.state.test);
    this.setState({test: ''});
  }

  render() {

    return(
      <div>
        <input type='text' placeholder='Add to do list...' value={this.state.test} onChange={this.handleChange.bind(this)} />
        <button type='submit' onClick={this.clearInput.bind(this)}>ADD LIST</button>
        <List todoList={this.props.salary.todolist}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    salary: state.salary,
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
