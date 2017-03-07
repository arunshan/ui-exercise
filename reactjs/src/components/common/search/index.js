import React, { Component } from 'react'

import './index.css'

export default class Search extends Component {
  constructor (props) {
    super (props)
    this.state  = {}
  }

  render () {
    return (<div className={'Search-Container'}>
      <input type='text' className={'Search-Field'} placeholder={'Search our API'} />
      <button className={'Search-Button'} value='Search'>{'Search'}</button>
    </div>)
  }
}
