import { Grid } from '@mui/material';
import { H2, Image, Small, Bold } from 'src/components';
import { reduceLongText } from 'src/helper/format-text';
import { styles } from './MainArticle.styles';
import Category, { CategoryType } from '../Category/Category';

interface EntryProps {
  category: CategoryType;
  title: string;
  date: string;
  description: string;
  src?: string;
}

const Entry = ({
  category,
  title,
  date,
  description,
  src,
}: EntryProps): JSX.Element => {
  const formatedText = reduceLongText(description, 220);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={styles.grid}
    >
      <Grid item xs={12} sm={12} md={6} style={styles.informationGrid}>
        <Category type={category} label="Hacking" />
        <Small style={styles.date}>{date}</Small>
        <H2 style={styles.h2}>
          <Bold>{title}</Bold>
        </H2>
        <Small>{formatedText}</Small>
      </Grid>
      {src && (
        <Grid item xs={12} sm={12} md={6}>
          <Image borderRadius="10" src={src} />
        </Grid>
      )}
    </Grid>
  );
};

export default Entry;
