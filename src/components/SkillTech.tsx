import styled from "styled-components";

interface Color {
  textColor: string;
}

interface SkillTechProps extends Color {
  text: string;
}

const SkillTech = ({ textColor, text }: SkillTechProps) => {
  return(
    <Container>
      <Text textColor={textColor}>{ text }</Text>
    </Container>
  );
};

export default SkillTech;

const Container = styled.div`
  padding: 0px 30px 0px 30px;
`

const Text = styled.p<Color>`
  color: ${props => props.textColor};
  font-size: 20px;
`