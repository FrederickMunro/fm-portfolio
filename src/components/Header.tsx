import styled from 'styled-components';

import ProfilePic from '../assets/profile.jpg'
import NavButton from './NavButton';

interface Text {
  textColor: string;
}

interface HeaderProps extends Text {
  setPage: Function;
}

const Header = ({ setPage, textColor }: HeaderProps) => {

  const buttons = {
    name: "Frederick Munro",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  }

  return(
    <Container>
      <LeftContainer>
        <NavButton
          setPage={setPage}
          page={0}
          textColor={textColor}
          text={buttons.name}
          pic={ProfilePic}
        />
      </LeftContainer>
      <RightContainer>
        <NavButton
          setPage={setPage}
          page={0}
          textColor={textColor}
          text={buttons.home}
        />
        <NavButton
          setPage={setPage}
          page={1}
          textColor={textColor}
          text={buttons.about}
        />
        <NavButton
          setPage={setPage}
          page={2}
          textColor={textColor}
          text={buttons.projects}
        />
        <NavButton
          setPage={setPage}
          page={3}
          textColor={textColor}
          text={buttons.contact}
        />
      </RightContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
  width: 700px;

  @media (max-width: 1000px) {
    width: 380px;
  }

  @media (max-width: 750px) {
    flex-flow: column nowrap;
    height: 250px;
    width: 100px;
    margin-right: 0px;
  }
`;