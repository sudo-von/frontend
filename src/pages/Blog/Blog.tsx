import { Container } from '@mui/material';
import Navbar from 'src/components/Navbar/Navbar';
import MainArticle from 'src/pages/Blog/Components/MainArticle/MainArticle';
import { CategoryType } from 'src/pages/Blog/Components/Category/Category';

const Blog = (): JSX.Element => (
  <Container>
    <Navbar />
    <MainArticle
      category={CategoryType.Hacking}
      title="Discover Weekly"
      date="Septiembre 25, 2022"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  sed do eiusmod  sed do eiusmod  sed do eiusmod  sed do eiusmod sed do eiusmod  sed do eiusmod adipiscing elit, sed do eiusmod  sed do eiusmod  sed do eiusmod"
      src="https://www.cloudcenterandalucia.es/wp-content/uploads/2022/01/Hacker-vs-Cracker_Cloud-Center-Andaluc%C3%ADa_Principal.png"
    />
  </Container>
);

export default Blog;
