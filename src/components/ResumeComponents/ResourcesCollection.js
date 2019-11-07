import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import { Button, Accordion, Card } from 'react-bootstrap'

import { resourceRoutes, resourceTitles } from '../../resourceDefinitions'
import Resource from './Resource'

const ResourcesCollection = ({ user, alert, resource }) => {
  const [itemList, setResourceList] = useState([])
  console.log('resourceRoute', resource, resourceRoutes[resource])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/${resourceRoutes[resource]}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => {
        console.log(responseData)
        const item = resourceRoutes[resource]
        console.log('item', item)
        setResourceList((responseData.data[item]))
      })
      .catch(() => console.error('could not load', resource))
  }, [])

  const itemListJsx = itemList ? itemList.map(item => (
    <Resource key={item._id} resource={resource} idKey={item._id} item={item} user={user} alert={alert}/>
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

export default ResourcesCollection
