import { Grid } from '@mui/material';
import { Image, Small, Bold, H5 } from 'src/components';
import { styles } from './SmallArticle.styles';

interface SmallArticleProps {
  title: string;
  date: string;
  src?: string;
  views: number;
}

const SmallArticle = ({
  title,
  date,
  src,
  views,
}: SmallArticleProps): JSX.Element => {
  return (
    <Grid
      container
      xs={6}
      sm={6}
      md={4}
      alignItems="center"
      justifyContent="center"
    >
      {src && (
        <Grid item xs={12} sm={12} md={4}>
          <Image borderRadius="10" src={src} />
        </Grid>
      )}
      <Grid item xs={12} sm={12} md={8}>
        <H5 style={styles.h5}>
          <Bold>{title}</Bold>
        </H5>
        <Small style={styles.date}>{date}</Small>
        <Small style={styles.views}>● {views} views</Small>
      </Grid>
    </Grid>
  );
};

export default SmallArticle;
