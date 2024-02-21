import styled from "styled-components";

interface NavButtonProps {
  setPage: Function;
  page: number;
  textColor: string;
  text: string;
  pic?: string;
}

interface TextProps {
  textColor: string;
}

const NavButton = ({ setPage, page, textColor, text, pic }: NavButtonProps) => {

  return(
    <Button onClick={() => setPage(page)}>
      { pic && <Pic src={pic} /> }
      <H3 textColor={textColor}>{text}</H3>
    </Button>
  );
};

export default NavButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

const H3 = styled.h3<TextProps>`
  font-size: 27px;
  color: ${props => props.textColor};
`;

const Pic = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin-right: 15px;
  border: 1px solid black;
  object-fit: cover;
  object-position: center;
`;