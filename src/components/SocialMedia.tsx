import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons'; // https://www.npmjs.com/package/react-social-icons

interface SocialMediaProps {
  fgColor: string
  bgColor: string;
}

const SocialMedia = ({ fgColor, bgColor }: SocialMediaProps) => {

  const socials = [
    { network: 'linkedin', url: 'https://www.linkedin.com/in/frederick-munro/' },
    { network: 'github', url: 'https://github.com/FrederickMunro/' },
    { network: 'x', url: 'https://twitter.com/FredMunro7' },
  ]

  return(
    <Div>
      {
        socials.map(e => {
          return(
            <SocialIcon
              url={e.url}
              network={e.network}
              target='_blank'
              fgColor={fgColor}
              bgColor={bgColor}
              style={{ margin: '5px 0px 5px 10px' }}
            />
          )
        })
      }
    </Div>
  );
};

export default SocialMedia;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`