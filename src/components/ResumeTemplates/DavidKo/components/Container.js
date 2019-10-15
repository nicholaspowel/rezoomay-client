import React from 'react'
import Resume from './Resume'
import src from '../images/background.webp'

const Container = ({ inverse }) => (
  <div id="container">
    <img src={src} alt="" className="img"/>
    <Resume inverse={inverse}/>
  </div>
)

export default Container
