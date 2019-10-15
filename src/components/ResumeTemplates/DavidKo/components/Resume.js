import React, { Component } from 'react'
import InfoColumn from './columns/InfoColumn'
import ContentColumn from './columns/ContentColumn'

class Resume extends Component {
  render () {
    return (
      <div id="resume">
        <InfoColumn />
        <ContentColumn/>
      </div>
    )
  }
}

export default Resume
