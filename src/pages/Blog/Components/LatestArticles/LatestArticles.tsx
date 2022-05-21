import { Grid } from '@mui/material';
import SmallArticle from 'src/pages/Blog/Components/LatestArticles/Components/SmallArticle/SmallArticle';

const LatestArticles = () => {
  return (
    <Grid container>
      <Grid container justifyContent="flex-start" alignItems="center">
        <SmallArticle
          title="Discover Weekly"
          date="Sep 25, 2022"
          src="http://wp.alithemes.com/html/flow/html-demo/assets/imgs/news/thumb-10.jpg"
          views={1200}
        />
        <SmallArticle
          title="Discover Weekly"
          date="Sep 25, 2022"
          src="http://wp.alithemes.com/html/flow/html-demo/assets/imgs/news/thumb-11.jpg"
          views={1200}
        />
        <SmallArticle
          title="Discover Weekly"
          date="Sep 25, 2022"
          src="http://wp.alithemes.com/html/flow/html-demo/assets/imgs/news/thumb-12.jpg"
          views={1200}
        />
      </Grid>
    </Grid>
  );
};

export default LatestArticles;
