import React from 'react'
import { Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Chat = () => {
  return (
    <Row className="d-f justify-content-center">
      <Link to={'/chat:1'}>Chat 1</Link>
      <Link to={'/chat:2'}>Chat 2</Link>
    </Row>
  )
};

export default Chat