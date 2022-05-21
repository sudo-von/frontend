import {
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  Chip,
} from '@mui/material';
import { Bold } from 'src/components';
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
      <CardActionArea target="_blank" href={repositoryUrl}>
        <CardHeader
          avatar={<Avatar src={imageUrl} />}
          title={<Bold>{title}</Bold>}
        />
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
