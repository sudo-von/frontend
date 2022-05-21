import { Grid } from '@mui/material';
import { CategoryType } from 'src/pages/Blog/Components/Category/Category';
import MainArticle from 'src/pages/Blog/Components/Section/Components/MainArticle/MainArticle';
import SmallArticle from 'src/pages/Blog/Components/Section/Components/SmallArticle/SmallArticle';

const Section = () => {
  return (
    <Grid container>
      <MainArticle
        category={CategoryType.Hacking}
        title="Discover Weekly"
        date="Sep 25, 2022"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  sed do eiusmod  sed do eiusmod  sed do eiusmod  sed do eiusmod sed do eiusmod  sed do eiusmod adipiscing elit, sed do eiusmod  sed do eiusmod  sed do eiusmod"
        src="https://www.cloudcenterandalucia.es/wp-content/uploads/2022/01/Hacker-vs-Cracker_Cloud-Center-Andaluc%C3%ADa_Principal.png"
      />
      <Grid container justifyContent="flex-start" alignItems="center">
        <SmallArticle
          title="Discover Weekly"
          date="Sep 25, 2022"
          src="https://www.cloudcenterandalucia.es/wp-content/uploads/2022/01/Hacker-vs-Cracker_Cloud-Center-Andaluc%C3%ADa_Principal.png"
          views={1200}
        />
        <SmallArticle
          title="Discover Weekly"
          date="Sep 25, 2022"
          src="https://www.cloudcenterandalucia.es/wp-content/uploads/2022/01/Hacker-vs-Cracker_Cloud-Center-Andaluc%C3%ADa_Principal.png"
          views={1200}
        />
        <SmallArticle
          title="Discover Weekly"
          date="Sep 25, 2022"
          src="https://www.cloudcenterandalucia.es/wp-content/uploads/2022/01/Hacker-vs-Cracker_Cloud-Center-Andaluc%C3%ADa_Principal.png"
          views={1200}
        />
      </Grid>
    </Grid>
  );
};

export default Section;
