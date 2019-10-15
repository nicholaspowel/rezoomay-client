import React from 'react'

const ContentProjectItem = ({ work }) => {
  return (
    <div className="content-work-item">
      <div className="d-flex justify-content-between">
        <div>
          <span className="font-weight-bold">{work.company}</span>
          <span> | </span>
          <span className="font-italic">{work.location}</span>
        </div>
        <span className="ml-auto">{work.date}</span>
      </div>
      <div>
        <span className="px-4">
          {work.title}
        </span>
      </div>
    </div>
  )
}

export default ContentProjectItem
