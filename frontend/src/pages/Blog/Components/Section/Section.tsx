import { Grid } from '@mui/material';
import { CategoryType } from 'src/pages/Blog/Components/Category/Category';
import MainArticle from 'src/pages/Blog/Components/Section/Components/MainArticle/MainArticle';
import { styles } from './Section.styles';

const Section = (): JSX.Element => {
  return (
    <Grid container style={styles.container}>
      <MainArticle
        category={CategoryType.Hacking}
        title="Binary Exploitation ELI5"
        date="September 25, 2022"
        description="In this article series I will be going over different types of binary exploits in detail, explaining what they are, how they work, the technologies behind them, and some defenses against them."
        src="https://hackernoon.com/hn-images/1*78XGVWH-dajYJoaEuDiQIQ.jpeg"
        maxTitleLength={41}
        maxDescriptionLength={225}
      />
    </Grid>
  );
};

export default Section;
