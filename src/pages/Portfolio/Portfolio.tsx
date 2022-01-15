import { Container } from '@mui/material';
import Profile from 'src/pages/Portfolio/Components/Profile/Profile';
import Experiencie from 'src/pages/Portfolio/Components/Experiencie/Experiencie';

const Portfolio = (): JSX.Element => (
  <Container>
    <Profile />
    <Experiencie />
  </Container>
);

export default Portfolio;
