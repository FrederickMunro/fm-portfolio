import styled from 'styled-components';

import Project from './Project';

import Space from "../assets/space.png";

interface ProjectsProps {
  textColor: string;
}

const Projects = ({ textColor }: ProjectsProps) => {

  const projects = [
    { name: 'Planetary Exploration: Terrestrial Planets', description:'Description', image: Space, href: 'https://frederickmunro.github.io/space/' }
  ]

  return(
    <>
      <H1 textColor={textColor}>Projects</H1>
      {
        projects.map((e, i) => {
          return(
            <Project
              name={e.name}
              description={e.description}
              image={e.image}
              href={e.href}
              key={i}
            />
          )
        })
      }
    </>
  );
};

export default Projects;

const H1 = styled.h1<ProjectsProps>`
  margin: 0;
  padding: 0;
  font-size: 60px;
  width: 716px;
  text-align: center;
  color: ${props => props.textColor};
`;