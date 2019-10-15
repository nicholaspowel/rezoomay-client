import React from 'react'

const InfoLanguagesItem = ({ skill }) => (
  <div className="info-item">
    <i className={skill.icon + ' icon'}></i>
    <span className="">{skill.value}</span>
  </div>
)

export default InfoLanguagesItem
