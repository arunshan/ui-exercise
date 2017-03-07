import React, { Component } from 'react'

import './index.css'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      widgets: this.props.widgets || []
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      widgets: props.widgets
    })
  }

  renderWidgets () {
    const widgets = this.state.widgets || []
    return widgets.map(widget => {
      return (<div className={'Widget-Container'}>
      </div>)
    })
  }

  render () {
    return (<div className={'List-Container'}>
      {this.renderWidgets()}
    </div>)
  }
}
