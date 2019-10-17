import React from 'react'
import InfoSkillsItem from './InfoSkillsItem'

const InfoSkills = () => {
  const skills = [
    {
      icon: 'devicon-react-original colored',
      value: 'React.js'
    },
    {
      icon: 'devicon-rails-plain colored',
      value: 'Ruby on Rails'
    },
    {
      icon: 'devicon-express-original colored',
      value: 'Express.js'
    },
    {
      icon: 'devicon-jquery-plain colored',
      value: 'jQuery'
    },
    {
      icon: 'devicon-bootstrap-plain colored',
      value: 'Bootstrap'
    },
    {
      icon: 'devicon-nodejs-plain colored',
      value: 'Node.js'
    }
  ]

  return (
    <div className="info-section">
      <h3 className="info-category-header">Libraries/Frameworks</h3>
      {skills.map((skill, index) => <InfoSkillsItem key={index} skill={skill}/>)}
    </div>
  )
}

export default InfoSkills
