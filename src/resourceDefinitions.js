export const resourceRoutes = {
  binder: 'binders',
  contact: 'contacts',
  education: 'educationList',
  interest: 'interests',
  job: 'jobs',
  profile: 'profiles',
  project: 'projects',
  resume: 'resumes',
  skill: 'skills',
  summary: 'summaries'
}

export const resourceModels = {
  binder: {},
  contact: {},
  education: {
    education: {
      description:
        '',
      coursework: '',
      _id: '',
      title: '',
      startDate: '',
      endDate: '',
      school: '',
      concentration: '',
      location: {
        city: '',
        state: '',
        country: ''
      },
      owner: '',
      createdAt: '',
      updatedAt: '',
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
