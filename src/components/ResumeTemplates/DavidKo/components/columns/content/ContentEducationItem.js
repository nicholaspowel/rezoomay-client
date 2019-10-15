import React from 'react'

const ContentProjectItem = ({ education }) => {
  return (
    <div className="content-education-item">
      <div className="d-flex justify-content-between">
        <div>
          <span className="font-weight-bold">{education.school}</span>
          <span> | </span>
          <span className="font-italic">{education.location}</span>
        </div>
        <span className="ml-auto">{education.date}</span>
      </div>
      {education.coursework ? <span>Coursework:</span> : ''}
      <ul>
        {education.description.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </div>
  )
}

export default ContentProjectItem
