import React from 'react';
import { Alert } from 'react-bootstrap';
import Links from '../components/Links'

const Home = () => {
  return (
    <div>
      <Links/>
      <Alert variant="dark" className="m-auto">
        Перейдите в профиль чтоб выбрать чат
      </Alert>
    </div>
  )
};

export default Home