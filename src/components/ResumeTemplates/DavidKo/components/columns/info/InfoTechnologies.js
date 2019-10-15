import React from 'react'
import InfoTechnologiesItem from './InfoTechnologiesItem'

const InfoTechnologies = () => {
  const technologies = [
    {
      icon: 'devicon-github-plain colored',
      value: 'Github'
    },
    {
      icon: 'devicon-heroku-plain colored',
      value: 'Heroku'
    },
    {
      icon: 'devicon-amazonwebservices-original colore',
      value: 'Amazon Web Services'
    },
    {
      icon: 'devicon-vim-plain colored',
      value: 'Vim'
    },
    {
      icon: 'devicon-atom-plain colored',
      value: 'Atom'
    },
    {
      icon: 'devicon-visualstudio-plain colored',
      value: 'VSCode'
    }
  ]

  return (
    <div className="info-section">
      <h3 className="info-category-header">Tools/Technologies</h3>
      {technologies.map((technology, index) => <InfoTechnologiesItem key={index} technology={technology}/>)}
    </div>
  )
}

export default InfoTechnologies
