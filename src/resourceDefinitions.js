export const resourceRoutes = {
  binder: '/binders',
  contact: '/contacts',
  education: '/educationList',
  interest: '/interests',
  job: '/jobs',
  profile: '/profiles',
  project: '/projects',
  resume: '/resumes',
  skill: '/skills',
  summary: '/summaries'
}

export const resourceModels = {
  binder: {},
  contact: {},
  education: {
    education: {
      description: 'Full time 500+ Web Development Immersive Program\n Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby\nCollaborated with a team using Agile methodology and Scrum principles',
      coursework: '',
      _id: '',
      title: 'GA',
      startDate: {
        month: 'Jan',
        year: 2019
      },
      endDate: {
        month: 'Apr',
        year: 2019
      },
      school: 'General Assembly',
      concentration: 'Full Stack Web Development',
      location: {
        city: 'Boston',
        state: 'MA',
        country: 'USA'
      },
      owner: '',
      createdAt: '2019-10-15T22:38:46.652Z',
      updatedAt: '2019-10-15T22:38:46.652Z',
      __v: 0
    }
  },
  interest: {},
  job: {},
  profile: {},
  project: {},
  resume: {},
  skill: {},
  summary: {}
}
