import styled from "styled-components";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  href: string;
}

const Project = ({ name, description, image, href }:ProjectProps) => {
  
  return(
    <Container>
      <A href={href} target='_blank'>
        <Img src={image} />
        <TextBox>
          <H2>{name}</H2>
          <P>{description}</P>
        </TextBox>
      </A>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 250px;
  width: 50%;
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