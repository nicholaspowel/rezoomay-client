import React from 'react'
import InfoContactItem from './InfoContactItem'

const InfoContact = () => {
  const contacts = [
    {
      type: 'Gmail',
      icon: 'gmail',
      value: 'david.holy.ko'
    },
    {
      type: 'Github',
      icon: 'github',
      value: 'davidholyko'
    },
    {
      type: 'LinkedIn',
      icon: 'linkedin',
      value: 'davidhko1'
    },
    {
      type: 'Portfolio',
      icon: 'portfolio',
      value: 'davidholyko.github.io'
    }
  ]

  return (
    <div className="info-section">
      <h3 className="info-category-header">Contact Info</h3>
      {contacts.map((contact, index) => <InfoContactItem key={index} contact={contact}/>)}
    </div>
  )
}

export default InfoContact
