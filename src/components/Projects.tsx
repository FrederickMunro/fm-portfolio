import styled from 'styled-components';

import Project from './Project';

import Space from "../assets/space.png";

interface ProjectsProps {
  textColor: string;
}

const Projects = ({ textColor }: ProjectsProps) => {

  return(
    <>
      <H1 textColor={textColor}>Projects</H1>
      <Project image={Space}></Project>
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