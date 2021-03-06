import { Grid, Typography } from '@mui/material';
import { H2, Image, Small, Bold, Subtitle } from 'src/components';
import { reduceLongText } from 'src/helper/format-text';
import { styles } from './MainArticle.styles';
import Category, { CategoryType } from '../../../Category/Category';

interface EntryProps {
  category: CategoryType;
  title: string;
  date: string;
  description: string;
  src?: string;
  maxTitleLength?: number;
  maxDescriptionLength?: number;
}

const Section = ({
  category,
  title,
  date,
  description,
  src,
  maxTitleLength,
  maxDescriptionLength,
}: EntryProps): JSX.Element => {
  const formatedTitle = maxTitleLength
    ? reduceLongText(title, maxTitleLength)
    : title;
  const formatedDescription = maxDescriptionLength
    ? reduceLongText(description, maxDescriptionLength)
    : description;
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={styles.container}
      spacing={5}
    >
      <Grid item xs={12} sm={12} md={6} style={styles.informationGrid}>
        <Category type={category} label="Hacking" />
        <Small style={styles.date}>{date}</Small>
        <H2 style={styles.h2}>
          <Bold>{formatedTitle}</Bold>
        </H2>
        <Subtitle>{formatedDescription}</Subtitle>
      </Grid>
      {src && (
        <Grid item xs={12} sm={12} md={6}>
          <Image borderRadius="10" src={src} />
        </Grid>
      )}
    </Grid>
  );
};

export default Section;
