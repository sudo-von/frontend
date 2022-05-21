import { Grid } from '@mui/material';
import HackingCard from 'src/pages/Portfolio/Components/Hacking/Components/HackingCard/HackingCard';
import { hacking } from '../../data';

interface HackingCardsProps {
  data: hacking[];
}

const HackingCards = ({ data }: HackingCardsProps): JSX.Element => {
  return (
    <Grid container>
      {data.map(
        ({ id, title, imageUrl, repositoryUrl, categories }: hacking) => (
          <Grid item key={id} xs={12} sm={6} md={6}>
            <HackingCard
              id={id}
              title={title}
              imageUrl={imageUrl}
              repositoryUrl={repositoryUrl}
              categories={categories}
            />
          </Grid>
        ),
      )}
    </Grid>
  );
};

export default HackingCards;
