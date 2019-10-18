# Rezoomay

## Description
Rezoomay is based on a previous project, [Resume-Clips](https://github.com/nicholaspowel/resume-clips-client), and inspired by David Ko's [Resume](https://github.com/davidholyko/resume) app. The goal of Rezoomay is to enable users to store all of the individual pieces of their work, project, and education history in one place, and then combine those pieces as needed into fully formatted resume templates that can be shared online, and eventually turned into PDFs.

David Ko has generously volunteered his app as the basis for the first template, and it was also the basis for the design of the database models and routes.


[Nicholas Powel](https://github.com/nicholaspowel)


## MVP User Stories

> - As an unregistered user, I would like to sign up with email and password.
> - As a registered user, I would like to sign in with email and password.
> - As a signed in user, I would like to change password.
> - As a signed in user, I would like to sign out.
> - As a signed in user, I would like to create the components of my resume.
> - As a signed in user, I would like to update the information in the components of my resume.
> - As a signed in user, I would like to delete my resume components.
> - As a signed in user, I would like to see all resume components organized by type.
> - As a signed in user, I would like to be able create collections of components.
> > - As a signed in user, I would like to be able to combine collections of components with a template to get a resume.

## Reach Goal(s)
Get all ten resources set up for CRUD actions
Each live survey should be hosted at a unique, randomly-generated URL.
API Paths & Methods
------
### Authentication

| Method | URL
|--------|------------------------
| POST   | `/sign-up`
| POST   | `/sign-in`
| PATCH  | `/change-password/`
| DELETE | `/sign-out/`

### EducationList

| Method   | URL
|--------|------------------------
| POST   | `/educationList`
| GET    | `/educationList`
| GET    | `/educationList/:id`
| PATCH  | `/educationList/:id`
| DELETE | `/educationList/:id`

### Projects

| Method   | URL
|--------|------------------------
| POST   | `/projects`
| GET    | `/projects`
| GET    | `/projects/:id`
| PATCH  | `/projects/:id`
| DELETE | `/projects/:id`

### Profiles

| Method   | URL
|--------|------------------------
| POST   | `/profiles`
| GET    | `/profiles`
| GET    | `/profiles/:id`
| PATCH  | `/profiles/:id`
| DELETE | `/profiles/:id`

### Skills

| Method   | URL
|--------|------------------------
| POST   | `/skills`
| GET    | `/skills`
| GET    | `/skills/:id`
| PATCH  | `/skills/:id`
| DELETE | `/skills/:id`

### Binders

| Method   | URL
|--------|------------------------
| POST   | `/binders`
| GET    | `/binders`
| GET    | `/binders/:id`
| PATCH  | `/binders/:id`
| DELETE | `/binders/:id`

### Jobs

| Method   | URL
|--------|------------------------
| POST   | `/jobs`
| GET    | `/jobs`
| GET    | `/jobs/:id`
| PATCH  | `/jobs/:id`
| DELETE | `/jobs/:id`

### Contacts

| Method   | URL
|--------|------------------------
| POST   | `/contacts`
| GET    | `/contacts`
| GET    | `/contacts/:id`
| PATCH  | `/contacts/:id`
| DELETE | `/contacts/:id`

### Binders

| Method   | URL
|--------|------------------------
| POST   | `/binders`
| GET    | `/binders`
| GET    | `/binders/:id`
| PATCH  | `/binders/:id`
| DELETE | `/binders/:id`

### Deployment

Github
Heroku

### Authentication

Passport.js

### Front-end
Html
CSS
JavaScript
React-Bootstrap
React
Moment.js


### Back-end
Postman
Express (Created RESTful routes for handling (GET, POST,PUT,PATCH and DELETE) requests)

### Database
MongoDb
Mongoose

## Links!

[Visit the back-end repo!](https://github.com/nicholaspowel/rezoomay-express-api)

[Back-end url](https://pure-inlet-68098.herokuapp.com/)

[Front-end url](https://nicholaspowel.github.io/rezoomay-client)
## Unsolved problems
Implementing the remaining resources on the frontend
Getting David Ko's resume template to work within this app
Passing Binder data into templates
Returning full binder data from the backend
Create a Volunteer resource
