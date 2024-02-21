import styled from "styled-components";

interface ProjectProps {
  image: string;
}

const Project = ({ image }:ProjectProps) => {
  return(
    <Container>
      <A href='https://frederickmunro.github.io/space/' target='_blank'>
        <Img src={image} />
        <TextBox>
          <H2>Space project</H2>
          <P>
            Short description of project.
          </P>
        </TextBox>
      </A>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 250px;
  width: 70%;
`

const Img = styled.img`
  height: 100%;
`

const A = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: black;
`

const H2 = styled.h2`
  
`

const P = styled.p`
  
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`