import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import { Button, Accordion, Card } from 'react-bootstrap'

import { resourceRoutes, resourceTitles } from '../../resourceDefinitions'
import Resource from './Resource'

const ResourceList = ({ user, alerts, resource }) => {
  const [itemList, setResourceList] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/${resourceRoutes[resource]}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => {
        // console.log(responseData.data.itemList)
        setResourceList((responseData.data.itemList))
      })
      .catch(() => alert({ heading: 'Rut roh', message: 'Couldn\'t get resource', variant: 'danger' }))
  }, [])

  const itemListJsx = itemList ? itemList.map(item => (
    <Resource key={item._id} idKey={item._id} item={item} user={user} alert={alert}/>
  )) : 'No Items to display'
  return (
    <Accordion>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        {resourceTitles[resource]}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {itemListJsx}
          <Link to='/create-item'><Button>Create Resource</Button></Link>
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default ResourceList
