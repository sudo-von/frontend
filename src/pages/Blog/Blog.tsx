import { Container } from '@mui/material';
import Navbar from 'src/components/Navbar/Navbar';
import Section from 'src/pages/Blog/Components/Section/Section';
import LatestArticles from 'src/pages/Blog/Components/LatestArticles/LatestArticles';

const Blog = (): JSX.Element => (
  <Container>
    <Navbar />
    <Section />
    <LatestArticles />
  </Container>
);

export default Blog;
