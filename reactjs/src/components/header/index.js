import React, { Component } from 'react'
import './index.css'
import Logo from '../common/logo'
import Search from '../common/search'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className={'Header-Container'}>
      <Logo />
      <Search />
    </div>)
  }
}
