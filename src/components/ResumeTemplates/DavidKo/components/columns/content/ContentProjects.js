import React from 'react'
import ContentProjectItem from './ContentProjectItem'

const projects = [
  {
    title: 'StackOverKo',
    summary: 'A question-response website for developers',
    skills: 'JavaScript HTML CSS Ruby React.js Rails PostgreSQL Axios',
    deployed: 'https://davidholyko.github.io/dko-stackoverko-client',
    repo: 'https://github.com/davidholyko/dko-stackoverko-client',
    description: [
      'Launched a open forum website that helps developers find specific answers',
      'Built Front End with React.js to emphasize modularity and boost performance',
      'Spearheaded a complex API that utilizes numerous one to many relationships and serializes nested associations',
      'Incorporated various open-source Node packages such as Markdown.js, Prism.js, Bootstrap'
    ]
  },
  {
    title: 'LetterBox',
    summary: 'A user friendly, text-only blogsite for cat lovers everywhere',
    skills: 'JavaScript HTML CSS Express.js MongoDB jQuery Handlebars.js Agile Bootstrap Mobile-Design Responsive-Design',
    deployed: 'https://m-d-h-s.github.io/mdhs-blog-frontend',
    repo: 'https://github.com/davidholyko/mdhs-blog-frontend',
    description: [
      'Produced a blogsite that allows users use CRUD actions on resources',
      'Collborated with group according to product development methodologies including Agile',
      'Coordinated with team to plan wireframes and Entity Relationship Diagrams',
      'Engineered Handlebars.js template for dynamic HTML generation',
      'Executed Responsive-Design and Modile-Friendly format for usability'
    ]
  },
  {
    title: 'Brain Age',
    summary: 'A game application inspired by Brain Age for the Nintendo DS',
    skills: 'JavaScript HTML CSS Ruby Rails jQuery Handlebars.js Math.js Chart.js Bootstrap PostgreSQL Mobile-Design Responsive-Design',
    repo: 'https://github.com/davidholyko/dko-brain-age-front-end',
    deployed: 'https://davidholyko.github.io/dko-brain-age-front-end',
    description: [
      'Envisioned a responsive user-friendly puzzle game that helps people think faster',
      'Implemented a Procedural Generation Algorithm that produces multiple choice logic',
      'Efficiently utilized existing Node packages such as Math.js and Chart.js to optimize time management',
      'Consolidated code into reducable and modular bits for future improvement with Handlebars.js',
      'Incorporated pseudo pages to effectively have multiple routes'
    ]
  }
]

const ContentProjects = () => (
  <div className="content-projects">
    <h3 className="text-center border-bottom my-3">Web Development Projects</h3>
    {projects.map((project, index) => <ContentProjectItem key={index} project={project} />)}
  </div>
)

export default ContentProjects
