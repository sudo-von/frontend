import { Container } from '@mui/material';
import Profile from 'src/pages/Portfolio/Components/Profile/Profile';
import Experiencie from 'src/pages/Portfolio/Components/Experiencie/Experiencie';
import Hacking from 'src/pages/Portfolio/Components/Hacking/Hacking';
import Navbar from 'src/components/Navbar/Navbar';

const Portfolio = (): JSX.Element => (
  <Container>
    <Navbar />
    <Profile />
    <Experiencie />
    <Hacking />
  </Container>
);

export default Portfolio;
