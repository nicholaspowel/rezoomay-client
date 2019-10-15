import React from 'react'
import InfoLanguagesItem from './InfoLanguagesItem'

const InfoLanguages = () => {
  const languages = [
    {
      icon: 'devicon-javascript-plain colored',
      value: 'JavaScript'
    },
    {
      icon: 'devicon-html5-plain colored',
      value: 'HTML'
    },
    {
      icon: 'devicon-css3-plain colored',
      value: 'CSS'
    },
    {
      icon: 'devicon-ruby-plain colored',
      value: 'Ruby'
    },
    {
      icon: 'devicon-python-plain colored',
      value: 'Python'
    },
    {
      icon: 'devicon-java-plain colored',
      value: 'Java'
    }
  ]

  return (
    <div className="info-section">
      <h3 className="info-category-header">Languages</h3>
      {languages.map((language, index) => <InfoLanguagesItem key={index} language={language}/>)}
    </div>
  )
}

export default InfoLanguages
