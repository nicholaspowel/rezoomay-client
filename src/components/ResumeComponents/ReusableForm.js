import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const EducationForm = ({ education, handleChange, handleSubmit }) => {
  const cancelPath = education._id ? '#/' : '#/'

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
          name="location[city]"
          onChange={handleChange}
          value={education.location.city}
          required
        />
        <Form.Control
          type="text"
          placeholder="State (eg MA)"
          name="location[state]"
          onChange={handleChange}
          value={education.location.state}
        />
        <Form.Control
          type="text"
          placeholder="Country"
          name="location[country]"
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
      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          placeholder=""
          name="startDate"
          onChange={handleChange}
          value={education.startDate}
        />
      </Form.Group>
      <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          placeholder=""
          name="endDate"
          onChange={handleChange}
          value={education.endDate}
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
          placeholder="Coursework: Break onto newlines every sentence or two"
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
