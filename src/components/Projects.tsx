import styled from 'styled-components';

import Project from './Project';

import Space from "../assets/space.png";
import FlappyBird from "../assets/flappybird.png"

interface ProjectsProps {
  textColor: string;
}

const Projects = ({ textColor }: ProjectsProps) => {

  const projects = [
    {
      name: 'Planetary Exploration: Terrestrial Planets',
      description:'Get to know your terrestrial planets here.',
      image: Space,
      href: 'https://frederickmunro.github.io/space/'
    },
    {
      name: 'Flappy Bird Clone',
      description:'A web-based clone of the classic Flappy Bird mobile game.',
      image: FlappyBird,
      href: 'https://frederickmunro.github.io/flappybird/'
    },
    {
      name: 'Flappy Bird Clone',
      description:'A web-based clone of the classic Flappy Bird mobile game.',
      image: FlappyBird,
      href: 'https://frederickmunro.github.io/flappybird/'
    },
    {
      name: 'Planetary Exploration: Terrestrial Planets',
      description:'Get to know your terrestrial planets here.',
      image: Space,
      href: 'https://frederickmunro.github.io/space/'
    },
    
  ]

  return(
    <>
      <H1 textColor={textColor}>Projects</H1>
      <Container>
        {
          projects.map((e, i) => {
            return(
              <Project
                name={e.name}
                description={e.description}
                image={e.image}
                href={e.href}
                textColor={textColor}
                key={i}
              />
            )
          })
        }
      </Container>
    </>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const H1 = styled.h1<ProjectsProps>`
  margin: 0;
  padding: 0;
  font-size: 60px;
  width: 716px;
  text-align: center;
  color: ${props => props.textColor};
`;