import React from 'react'
import cooking from '../../../images/cooking.png'
import football from '../../../images/football.png'
import smite from '../../../images/smite.png'
import warhammer from '../../../images/warhammer.png'
import catan from '../../../images/catan.png'

const images = { cooking, football, smite, warhammer, catan }

const InfoInterestsItem = ({ interest }) => {
  return (
    <div className="info-item">
      <img className='icon' src={images[interest.icon]}/>
      <span className="">{interest.value}</span>
    </div>
  )
}

export default InfoInterestsItem
