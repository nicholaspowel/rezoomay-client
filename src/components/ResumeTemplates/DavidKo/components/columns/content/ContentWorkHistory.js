import React from 'react'
import ContentWorkHistoryItem from './ContentWorkHistoryItem'

const works = [
  {
    date: 'Oct 2018 - Jan 2019',
    company: 'Roche Bros Supermarket',
    title: 'Deli Clerk',
    location: 'Boston, MA'
  },
  {
    date: 'June 2018 - July 2018',
    company: 'Manning Personnel Group',
    title: 'Cryprocurrency Compliance Specialist',
    location: 'Boston, MA'
  },
  {
    date: 'Jan 2015 - January 2017',
    company: 'Rover.com',
    title: 'Dog Sitter',
    location: 'Boston, MA'
  }
]

const ContentWorkHistory = () => (
  <div className="content-work-history">
    <h3 className="text-center border-bottom my-3">Work History</h3>
    {works.map((work, index) => <ContentWorkHistoryItem key={index} work={work} />)}
  </div>
)

export default ContentWorkHistory
