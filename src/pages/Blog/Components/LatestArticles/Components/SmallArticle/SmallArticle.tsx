import { Grid } from '@mui/material';
import { Image, Small, Bold, H5 } from 'src/components';
import { formatThousands } from 'src/helper/format-text';
import { styles } from './SmallArticle.styles';

interface SmallArticleProps {
  title: string;
  date: string;
  src: string;
  views: number;
}

const SmallArticle = ({
  title,
  date,
  src,
  views,
}: SmallArticleProps): JSX.Element => {
  const formatedViews = formatThousands(views).toLowerCase();
  return (
    <Grid
      container
      xs={6}
      sm={6}
      md={4}
      spacing={3}
      alignItems="center"
      justifyContent="center"
      style={styles.container}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Image borderRadius="10" src={src} style={styles.image} />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <H5 style={styles.h5}>
          <Bold>{title}</Bold>
        </H5>
        <Small>{date}</Small>
        <Small style={styles.views}>● {formatedViews} views</Small>
      </Grid>
    </Grid>
  );
};

export default SmallArticle;
