import React from 'react'
import InfoHeader from './info/InfoHeader'
import InfoContact from './info/InfoContact'
import InfoLanguages from './info/InfoLanguages'
import InfoSkills from './info/InfoSkills'
import InfoTechnologies from './info/InfoTechnologies'
import InfoInterests from './info/InfoInterests'

const InfoColumn = () => (
  <div id="info-column">
    <InfoHeader />
    <InfoContact />
    <InfoLanguages />
    <InfoSkills />
    <InfoTechnologies />
    <InfoInterests />

    <div className="info-item mt-auto pb-5 d-flex flex-column">
      <span>This resume is made with React.js</span>
      <span>Deployed on Github Pages:</span>
      <span className="mt-3">davidholyko.github.io/resume</span>
    </div>
  </div>
)

export default InfoColumn
