import Head from 'next/head';

import NextLogo from '../assets/reactLogo.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <NextLogo height="10rem" width="10rem" />

      <h1>React JS Structure</h1>

      <p>A React JS + Next.js structure made by Luciel Santos</p>
    </Container>
  );
};

export default Home;
