import React from 'react'

const InfoLanguagesItem = ({ language }) => (
  <div className="info-item">
    <i className={language.icon + ' icon'}></i>
    <span className="">{language.value}</span>
  </div>
)

export default InfoLanguagesItem
