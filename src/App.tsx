import { useEffect, useState } from 'react';

import SocialMedia from './components/SocialMedia';
import Background from './components/Background';
import Header from './components/Header';

import './styles/App.css';
import Content from './components/Content';

interface Dimensions {
  height: number;
  width: number;
}

interface Coordinates {
  x: number;
  y: number;
}

interface IconColor {
  fgColor: string
  bgColor: string
}

function App() {

  const [windowSize, setWindowSize] = useState<Dimensions>({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const [cursor, setCursor] = useState<Coordinates>({
    x: 0,
    y: 0,
  })

  const [textColor, setTextColor] = useState<IconColor>({
    fgColor: 'transparent',
    bgColor: 'black',
  })

  const [page, setPage] = useState<number>(0);

  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handlePageLeft = () => {
    setPage(page-1);
  }
  const handlePageRight = () => {
    setPage(page+1)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return() => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])

  useEffect(() => {
    if (cursor.y / windowSize.height >= 0.95) {
      setTextColor({
        fgColor: 'black',
        bgColor: 'white',
      });
    } else {
      setTextColor({
        fgColor: 'transparent',
        bgColor: 'black',
      });
    }
  }, [cursor])

  return (
    <>
      <Background
        cursor={cursor}
        windowSize={windowSize}
      />
      <Header setPage={setPage} textColor={textColor.bgColor} />
      <Content
        textColor={textColor.bgColor}
        page={page}
        handlePageLeft={handlePageLeft}
        handlePageRight={handlePageRight}
      />
      <SocialMedia
        fgColor={textColor.fgColor}
        bgColor={textColor.bgColor}
      />
    </>
  );
};

export default App;
