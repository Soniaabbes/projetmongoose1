import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Link to= '/Edit' >
          <Button variant="primary">add contact </Button>
          </Link>
     <Link to='/ListContact'> <Button variant="secondary">list of contacts</Button>
     </Link>
    </div>
  )
}

export default Home