import React from 'react';
import { Header, Icon, Grid, Button } from 'semantic-ui-react';


import './welcome.scss';

const Welcome = () => {
  return (
    <div className="Welcome">
      <Grid columns="2" stackable={true}>
        <Grid.Column>
          <Header as="h1" size="huge">Elliott Moore.</Header>
        </Grid.Column>
        <Grid.Column textAlign="right" verticalAlign="middle">
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/mooreorless">
            <Icon link size="large" color="grey" name="github" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mooreorless">
            <Icon link size="large" color="grey" name="linkedin" />
          </a>
          {/* <Button size="mini" color="violet">Contact me</Button> */}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Welcome;