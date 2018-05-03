import React from 'react';
import { Container } from 'semantic-ui-react';

import { Welcome, About, Project, Copyright } from './components';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Container text className="middle aligned grid">
        <div className="column">
          <Welcome />
          <About />
          <Project />
        </div>
      </Container>
      <Copyright />
    </div>
  );
}

export default App;
