import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { resourceRoutes, resourceModels } from '../../resourceDefinitions'
import { withRouter, Redirect } from 'react-router-dom'
import { Button, Accordion, Card } from 'react-bootstrap'

/*
author: "Miguel de Cervantes"
createdAt: "2019-10-11T14:08:22.260Z"
firstPublished: 1612
originalLanguage: "Spanish"
owner: {_id: "5da08cd6ccf6513fbb556bdf", updatedAt: "2019-10-11T16:00:08.205Z", createdAt: "2019-10-11T14:08:22.196Z", email: "w@4", __v: 0, …}
title: "Don Quixote"
updatedAt: "2019-10-11T14:08:22.260Z"
__v: 0
_id: "5da08cd6ccf6513fbb556be0"
*/

const Education = ({ resource, idKey, user, alert }) => {
  const [deleted, setDeleted] = useState(false)
  const [item, setItem] = useState(resourceModels[resource])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/${resourceRoutes[resource]}/${idKey}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setItem(response.data.education)
      })
      .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  }, [])

  const deleteResource = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/${resourceRoutes[resource]}/${idKey}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => {
        setDeleted(true)
      })
      .then(() => alert({ heading: 'Success', message: 'You deleted a education!', variant: 'success' }))
      .catch(() => alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' }))
  }
  if (deleted) {
    return <Redirect to='/'/>
  } else if (!item) {
    return <h2>Loading...</h2>
  } else {
    return (
      <Fragment>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={idKey}>
              {item.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={idKey}>
              <Card.Body>
                <h1>{item.title}</h1>
                <Button onClick={deleteResource} variant="danger">Destroy Education </Button>
                <Button href={`#/${resourceRoutes[resource]}/${idKey}/edit`} variant="warning">Edit</Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Fragment>
    )
  }
}

export default withRouter(Education)
