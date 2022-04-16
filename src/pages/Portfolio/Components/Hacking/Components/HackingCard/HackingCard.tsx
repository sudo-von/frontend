import {
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  Chip,
} from '@mui/material';
import { hacking, categories as categoryType } from '../../data';
import { styles } from './HackingCard.styles';

const HackingCard = ({
  id,
  title,
  imageUrl,
  repositoryUrl,
  categories,
}: hacking) => {
  return (
    <Card style={styles.card}>
      <CardActionArea href={repositoryUrl}>
        <CardHeader avatar={<Avatar src={imageUrl} />} title={title} />
        <CardContent>
          {categories.map((category: categoryType) => {
            return (
              <Chip
                key={`${id}-${category}`}
                style={styles.chip}
                label={category}
              />
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HackingCard;
