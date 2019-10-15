import React from 'react'
import InfoInterestsItem from './InfoInterestsItem'

const InfoInterests = () => {
  const interests = [
    {
      icon: 'cooking',
      value: 'Cooking'
    },
    {
      icon: 'football',
      value: 'NFL'
    },
    {
      icon: 'smite',
      value: 'Smite'
    },
    {
      icon: 'warhammer',
      value: 'Warhammer 2'
    },
    {
      icon: 'catan',
      value: 'Catan'
    }
  ]

  return (
    <div className="info-section">
      <h3 className="info-category-header">Interests</h3>
      {interests.map((interest, index) => <InfoInterestsItem key={index} interest={interest}/>)}
    </div>
  )
}

export default InfoInterests
