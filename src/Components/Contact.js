import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


function Contact({contacte}) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{contacte.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">  email</Card.Subtitle>
        <Card.Text>
          {contacte.email}
        </Card.Text>
       <Button vatiant='primary'> Delete</Button>
       <Button vatiant='primary'> update</Button>
      
      </Card.Body>
    </Card>

    </div>)
}

export default Contact