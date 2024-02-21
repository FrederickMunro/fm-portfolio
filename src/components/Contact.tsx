import styled from 'styled-components';

interface ContactProps {
  textColor: string;
}

const Contact = ({ textColor }: ContactProps) => {

  return(
    <>
      <H1 textColor={textColor}>Contact</H1>
    </>
  );
};

export default Contact;

const H1 = styled.h1<ContactProps>`
  margin: 0;
  padding: 0;
  font-size: 60px;
  width: 716px;
  text-align: center;
  color: ${props => props.textColor};
`;