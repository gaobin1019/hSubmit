import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Lists} from "./Lists";
import {AddList} from "../actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
  }

  addList() {
    this.props.store.dispatch(AddList(this.listInput.value));
    this.listInput.value = '';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Horizon</h1>
        </header>
        <h2>can drag and drop cards, but not list yet</h2>
        <Lists
          lists={this.props.store ? this.props.store.getState() : []}
          store={this.props.store}
        />
        <input
          type="text"
          ref={node => this.listInput = node}
          placeholder='Add a list'
        />
        <button
          onClick={this.addList}
        >+</button>
      </div>
    );
  }
}

export default App;
