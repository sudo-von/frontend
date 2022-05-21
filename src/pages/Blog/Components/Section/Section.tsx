import { Grid } from '@mui/material';
import { CategoryType } from 'src/pages/Blog/Components/Category/Category';
import MainArticle from 'src/pages/Blog/Components/Section/Components/MainArticle/MainArticle';

const Section = () => {
  return (
    <Grid container>
      <MainArticle
        category={CategoryType.Hacking}
        title="Discover Weekly"
        date="Sep 25, 2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  sed do eiusmod  sed do eiusmod  sed do eiusmod  sed do eiusmod sed do eiusmod  sed do eiusmod adipiscing elit, sed do eiusmod  sed do eiusmod  sed do eiusmod"
        src="http://wp.alithemes.com/html/flow/html-demo/assets/imgs/news/thumb-10.jpg"
      />
    </Grid>
  );
};

export default Section;
