import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../models/home'
import Home from '../components/pages/Home'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Home />
    )
  }
}

export default connect()(Index)