import styled from "styled-components";

interface IntroProps {
  textColor: string;
}

const IntroPage = ({ textColor }: IntroProps) => {
  return(
    <>
      <H1 textColor={textColor}>Hey, I'm Frederick Munro</H1>
      <H2 textColor={textColor}>Welcome to my full-stack developer portfolio – where I bring ideas to life through code and innovation.</H2>
    </>
  );
};

export default IntroPage;

const H1 = styled.h1<IntroProps>`
  margin: 0;
  padding: 0;
  font-size: 60px;
  width: 716px;
  color: ${props => props.textColor};
`;

const H2 = styled.h2<IntroProps>`
  margin: 0;
  padding: 0;
  font-size: 30px;
  width: 900px;
  text-align: center;
  color: ${props => props.textColor};
`;