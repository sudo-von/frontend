import { Container } from '@mui/material';
import Navbar from 'src/components/Navbar/Navbar';
import Section from 'src/pages/Blog/Components/Section/Section';

const Blog = (): JSX.Element => (
  <Container>
    <Navbar />
    <Section />
  </Container>
);

export default Blog;
