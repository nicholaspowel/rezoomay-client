import React from 'react'
import gmail from '../../../images/gmail.png'
import linkedin from '../../../images/linkedin.png'
import phone from '../../../images/phone.png'
import github from '../../../images/github.png'
import portfolio from '../../../images/portfolio.png'

const images = { gmail, linkedin, phone, github, portfolio }

const InfoContactItem = ({ contact }) => (
  <div className="info-contact-item">
    <div className="d-flex">
      <img className='icon my-auto' src={images[contact.icon]}/>
      <span className="my-auto">{contact.type}:</span>
    </div>
    <div className="d-flex">
      <span className="my-auto">{contact.value}</span>
    </div>
  </div>
)

export default InfoContactItem
