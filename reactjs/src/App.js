import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import List from './components/list'
import Api from './services/api'
const api = new Api()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      widgets: []
    }
  }
  componentDidMount () {
    api.getWidgets()
      .then(data => {
        this.setState({ widgets: data})
      })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <List widgets={this.state.widgets} />
      </div>
    );
  }
}

export default App;
