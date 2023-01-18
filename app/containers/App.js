import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import * as UrlActions from '../actions/urls';
import style from './App.css';

@connect(
  state => ({
    todos: state.todos,
    urls: state.urls
  }),
  dispatch => ({
    actions: bindActionCreators(Object.assign({}, TodoActions, UrlActions), dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { todos, urls, actions } = this.props;
    console.log(this.props);
      console.log('urls', urls)
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}
