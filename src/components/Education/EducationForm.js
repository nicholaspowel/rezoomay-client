import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

/*
{
  description: [
    'Full time 500+ Web Development Immersive Program',
    'Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby',
    'Collaborated with a team using Agile methodology and Scrum principles'
  ],
  coursework: [],
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
}
*/

const EducationForm = ({ education, handleChange, handleSubmit }) => {
  const cancelPath = education._id ? `#/educationList/${education._id}` : '#educationList'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} value={education.title} required/>
      </Form.Group>
      <Form.Group controlId="school">
        <Form.Label>School</Form.Label>
        <Form.Control
          type="text"
          placeholder="School"
          name="school"
          onChange={handleChange}
          value={education.school}
          required
        />
      </Form.Group>
      <Form.Group as={Row} controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          name="city"
          onChange={handleChange}
          value={education.location.city}
          required
        />
        <Form.Control
          type="text"
          placeholder="State (eg MA)"
          name="state"
          onChange={handleChange}
          value={education.location.state}
        />
        <Form.Control
          type="text"
          placeholder="Country"
          name="country"
          onChange={handleChange}
          value={education.location.country}
          required
        />
      </Form.Group>
      <Form.Group controlId="concentration">
        <Form.Label>Concentration</Form.Label>
        <Form.Control
          type="text"
          placeholder="ex: Political Science"
          name="concentration"
          onChange={handleChange}
          value={education.concentration}
        />
      </Form.Group>
      <Form.Group as={Row} controlId="startDate">
        <Form.Label>Start Month</Form.Label>
        <Form.Control
          as="select"
          name="startDate[month]"
          onChange={handleChange}
          value={education.startDate.month}>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </Form.Control>
        <Form.Label>Start Year</Form.Label>
        <Form.Control
          type="number"
          name="startDate[year]"
          onChange={handleChange}
          value={education.startDate.year}
        />
      </Form.Group>
      <Form.Group as={Row} controlId="endDate">
        <Form.Label>End Month</Form.Label>
        <Form.Control
          as="select"
          name="endDate[month]"
          onChange={handleChange}
          value={education.endDate.month}>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </Form.Control>
        <Form.Label>End Year</Form.Label>
        <Form.Control
          type="number"
          name="endDate[year]"
          onChange={handleChange}
          value={education.endDate.year}
          required
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="4"
          placeholder="What you did. Break onto newlines every sentence or two"
          name="description"
          onChange={handleChange}
          value={education.description}
        />
      </Form.Group>
      <Form.Group controlId="coursework">
        <Form.Label>Coursework</Form.Label>
        <Form.Control
          as="textarea"
          rows="4"
          placeholder=" Break onto newlines every sentence or two"
          name="coursework"
          onChange={handleChange}
          value={education.coursework}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="secondary" href={cancelPath} className="ml-2">Cancel</Button>
    </Form>
  )
}

export default EducationForm
