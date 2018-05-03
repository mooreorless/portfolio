import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import './project.scss';

const projects = [{
  name: 'morale-by-mention',
  meta: 'Tanda Hackathon \'18',
  description: 'A simple way to give a shout out to your employees.',
  repo: 'https://github.com/simongordon/morale-by-mention',
  url: 'http://morale-by-mention.s3-website-ap-southeast-2.amazonaws.com',
  image: '/assets/tanda.png'
}, {
  name: 'sample-project-name',
  meta: 'some hackathon or side project',
  description: 'sample description',
  repo: 'https://github.com/mooreorless',
  url: '',
  image: '',
}];


const Project = () => {
  return (
    <Card.Group>
      {projects.map((project) => {
        return (
          <Card key={project.name}>
            <Card.Content>
              <Image floated="right" size="mini" src={`${process.env.PUBLIC_URL}${project.image}`} />
              <Card.Header>
                {project.name}
              </Card.Header>
              <Card.Meta>
                {project.meta}
              </Card.Meta>
              <Card.Description>
                <small>{project.description}</small>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <a rel="noopener noreferrer" target="_blank" href={project.repo}>
                  <Button link="true">Repo</Button>
                </a>
                <a rel="noopener noreferrer" target="_blank" href={project.url}>
                  <Button link="true" color="yellow">View</Button>
                </a>
              </div>
            </Card.Content>
          </Card>
        );
      })}
      <Button size="tiny" color="violet">Contact me</Button>
      <a rel="noopener noreferrer" target="_blank" href="">
        <Button size="tiny" link="true">View more projects --></Button>
      </a>
    </Card.Group>
  );
};

export default Project;