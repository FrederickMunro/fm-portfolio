import styled, { css } from 'styled-components';

import IntroPage from './IntroPage';
import AboutPage from './AboutPage';
import Projects from './Projects';
import Contact from './Contact';

interface Color {
  textColor: string;
}

interface ContentProps extends Color {
  page: number;
  handlePageLeft: Function;
  handlePageRight: Function;
}

interface Page {
  page: number;
}

interface ArrowButton extends Page {
  textColor: string;
}

interface DotProps {
  page: number;
  currentPage: number;
}

const Content = ({ textColor, page, handlePageLeft, handlePageRight }: ContentProps) => {

  return(
    <>
      <LocationContainer>
        <Dot page={0} currentPage={page} />
        <Dot page={1} currentPage={page} />
        <Dot page={2} currentPage={page} />
        <Dot page={3} currentPage={page} />
      </LocationContainer>
      <Container>
        <ButtonContainer>
          <LeftButton textColor={textColor} page={page} onClick={() => handlePageLeft()} >{'<'}</LeftButton>
        </ButtonContainer>
        <VisibleContainer>
          <TextBoxContainer page={page}>
            <TextBox textColor={textColor}>
              <IntroPage textColor={textColor} />
            </TextBox>
            <TextBox textColor={textColor}>
              <AboutPage textColor={textColor} />
            </TextBox>
            <TextBox textColor={textColor}>
              <Projects textColor={textColor} />
            </TextBox>
            <TextBox textColor={textColor}>
              <Contact textColor={textColor} />
            </TextBox>
          </TextBoxContainer>
        </VisibleContainer>
        <ButtonContainer>
          <RightButton textColor={textColor} page={page} onClick={() => handlePageRight()}>{'>'}</RightButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Content;

const ScrollBarStyles = css`
  scrollbar-color: #000 #0000;

  /* Track */
  ::-webkit-scrollbar {
    width: 20px; /* width of the scrollbar */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #000; /* color of the scrollbar handle */
    border-radius: 6px; /* roundness of the scrollbar handle */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff; /* color of the scrollbar handle on hover */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #0000; /* color of the scrollbar track */
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #0000; /* color of the scrollbar track on hover */
  }
`

const Container = styled.div`
  min-height: 0;
  height: calc(80vh - 120px);
  margin-left: 60px;
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  width: 100px;
  text-align: center;
`;

const VisibleContainer = styled.div`
  display: flex;
  justify-content: center;
  left: 15%;
  width: calc(100% - 200px);
  height: 100%;
  overflow-x: hidden;
  margin: auto;
  min-height: 0;

  ${ScrollBarStyles}
`;

const TextBoxContainer = styled.div<Page>`
  display: flex;
  transform: translateX(${props => -props.page * 100}%);
  transition: transform 0.5s ease;
  width: 100%;
  min-height: 0;
  margin: auto;
`;

const TextBox = styled.div<Color>`
  display: flex;
  justify-content: safe center;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  color: ${props => props.textColor};
  min-width: 100%;
  overflow-y: auto;
  height: calc(80vh - 120px);
  margin: auto;
`;

const LeftButton = styled.button<ArrowButton>`
  font-weight: bold;
  font-size: 45px;
  width: 60px;
  height: 60px;
  color: ${props => props.textColor};
  display: ${props => props.page === 0 ? 'none' : 'visible'};
  background: none;
  border: none;
  cursor: pointer;
`;

const RightButton = styled.button<ArrowButton>`
  font-weight: bold;
  font-size: 45px;
  width: 60px;
  height: 60px;
  color: ${props => props.textColor};
  display: ${props => props.page === 3 ? 'none' : 'visible'};
  background: none;
  border: none;
  cursor: pointer;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  top: 100px;
  width: 100%;
  height: 30px;
`;

const Dot = styled.div<DotProps>`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: ${props => (props.page == props.currentPage) ? 'silver' : 'black'};
  margin: 10px;
  border: 1px solid ${props => (props.page == props.currentPage) ? 'dimgray' : 'black'};
`;