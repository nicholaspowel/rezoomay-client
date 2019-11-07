export const resourceArray = [
  'contact',
  'education',
  'interest',
  'job',
  'profile',
  'project',
  'skill',
  'summary'
]

export const resourceRoutes = {
  // binder: 'binders',
  contact: 'contacts',
  education: 'educationList',
  interest: 'interests',
  job: 'jobs',
  profile: 'profiles',
  project: 'projects',
  // resume: 'resumes',
  skill: 'skills',
  summary: 'summaries'
}

export const resourceTitles = {
  // binder: 'Collections',
  contact: 'Contact Methods',
  education: 'Education',
  interest: 'Interests',
  job: 'Jobs',
  profile: 'Profiles',
  project: 'Projects',
  // resume: 'Resumes',
  skill: 'Skills',
  summary: 'Summaries'
}

export const resourceModels = {
  // binder: {},
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
  // resume: {},
  skill: {},
  summary: {}
}
