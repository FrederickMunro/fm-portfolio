import styled from "styled-components";
import SkillTech from "./SkillTech";

interface AboutProps {
  textColor: string;
}

const AboutPage = ({ textColor }: AboutProps) => {

  const skills = [
    'TypeScript',
    'JavaScript',
    'React',
    'Node',
    'HTML',
    'CSS',
    'Python',
    'Java',
    'Git',
    'Agile',
    'SQL',
    'noSQL'
  ]

  return(
    <>
      <H1 textColor={textColor}>About Me</H1>
      <H2 textColor={textColor}>Here, you'll find more information about me such as my education, skills, and known technologies.</H2>
      <ContentContainer>
        <LeftContainer>
          <H4 textColor={textColor}>Get to know me!</H4>
          <SkillsContainer>
            <Text textColor={textColor}>
              As a Full Stack Web Developer, I am dedicated to continuous learning and development within the dynamic realm of 
              technology. Equipped with a Bachelor's Degree in Software Engineering from Concordia University, I possess 
              proficiency in both frontend and backend development, actively pursuing new methods and tools to expand my expertise.
            </Text>
            <Text textColor={textColor}>
              Driven by a deep passion for staying at the forefront of technological advancements, I approach each project 
              with a curious outlook, always eager to discover and implement innovative solutions.
            </Text>
          </SkillsContainer>
        </LeftContainer>
        <RightContainer>
          <H4 textColor={textColor}>Skills and Technologies</H4>
          <SkillsContainer>
            {
              skills.map((e, i) => {
                return(
                  <SkillTech textColor={textColor} text={e}  key={i} />
                )
              })
            }
          </SkillsContainer>
        </RightContainer>
      </ContentContainer>
    </>
  );
};

export default AboutPage;

const H1 = styled.h1<AboutProps>`
  margin: 0;
  padding: 0;
  font-size: 60px;
  width: 716px;
  text-align: center;
  color: ${props => props.textColor};
  position: relative;
`;

const H2 = styled.h2<AboutProps>`
  margin: 0;
  padding: 0;
  font-size: 30px;
  width: 900px;
  text-align: center;
  color: ${props => props.textColor};
`;

const H4 = styled.h1<AboutProps>`
  margin: 0;
  padding: 0;
  font-size: 30px;
  width: 716px;
  text-align: left;
  color: ${props => props.textColor};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 40px;
`;

const LeftContainer = styled.div`
  margin-top: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  margin-top: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.p<AboutProps>`
  color: ${props => props.textColor};
  font-size: 20px;
  margin: 15px 0px 0px 0px;
`