import React from 'react';
import { Message } from 'semantic-ui-react';

import './about.scss';

const About = () => {
  return (
    <Message>
      <Message.Header>
        About Me
      </Message.Header>
      <p>Hello friends.
        I am <em>Elliott Moore</em> and I like to code.</p>
    </Message>
  );
}

export default About;