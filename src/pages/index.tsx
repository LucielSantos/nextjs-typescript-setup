import ReactLogo from '../assets/reactLogo.svg';
import { Container } from '../styles/pages/Home';
import { Typography, Head } from '../components';
import { homeConstants } from '../constants/home';
import { useAppSelector } from '../hooks/store/useAppSelector';

import * as HomeActions from '../store/modules/home/actions';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const { count } = useAppSelector(state => state.home);
  const dispatch = useDispatch();

  const onClickLogo = useCallback(() => {
    dispatch(HomeActions.addList(count + 1));
  }, [dispatch, count]);

  return (
    <Container>
      <Head title="Home page" />

      <ReactLogo
        height="10rem"
        width="10rem"
        style={{ transform: `rotate(${20 * count}deg)`, cursor: 'pointer', userSelect: 'none' }}
        onClick={onClickLogo}
      />
      <sub>Click on logo to rotate (the count is on Redux state)</sub>

      <h1>{homeConstants.title}</h1>

      <Typography>A React JS + Next.js structure made by Luciel Santos</Typography>
    </Container>
  );
};

export default Home;
