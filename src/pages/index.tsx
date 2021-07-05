import ReactLogo from '../assets/reactLogo.svg';
import { Container } from '../styles/pages/Home';
import { Typography, Head } from '../components';
import { homeConstants } from '../constants/home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="Home page" />

      <ReactLogo height="10rem" width="10rem" />

      <h1>{homeConstants.title}</h1>

      <Typography>
        A React JS + Next.js structure made by Luciel Santos
      </Typography>
    </Container>
  );
};

export default Home;
