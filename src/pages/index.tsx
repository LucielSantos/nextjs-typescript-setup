import { useCallback } from 'react';

import ReactLogo from '../assets/reactLogo.svg';

import { Container } from '../styles/pages/Home';
import { Typography, Head } from '../components';
import { homeConstants } from '../constants/home';

import { useHome } from '../hooks/pages/useHome';

const Home: React.FC = () => {
  const { count, addCount } = useHome();

  const onClickLogo = useCallback(() => {
    addCount();
  }, [addCount]);

  return (
    <Container>
      <Head title="Home page" />

      <ReactLogo
        height="10rem"
        width="10rem"
        style={{ transform: `rotate(${20 * count}deg)`, cursor: 'pointer', userSelect: 'none' }}
        onClick={onClickLogo}
      />
      <sub>
        Click on logo to rotate
        <br />
        (the count is on Redux state, see on Redux DevTools)
      </sub>

      <h1>{homeConstants.title}</h1>

      <Typography>A React JS + Next.js structure made by Luciel Santos</Typography>
    </Container>
  );
};

export default Home;
