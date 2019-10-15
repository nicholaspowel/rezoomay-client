import React from 'react'

const InfoLanguagesItem = ({ technology }) => (
  <div className="info-item">
    <i className={technology.icon + ' icon'}></i>
    <span className="">{technology.value}</span>
  </div>
)

export default InfoLanguagesItem
