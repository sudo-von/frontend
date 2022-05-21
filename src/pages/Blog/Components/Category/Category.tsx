import Chip from '@mui/material/Chip';
import { useTheme } from 'styled-components';
import { styles } from './Category.styles';

export enum CategoryType {
  Hacking,
}

interface CategoryProps {
  type: CategoryType;
  label: string;
}

const Category = ({ type, label }: CategoryProps) => {
  const theme = useTheme();
  let backgroundColor = theme.colors.primary;
  if (type === CategoryType.Hacking) {
    backgroundColor = theme.blog.category.hacking;
  }
  const categoryStyles = styles(backgroundColor, theme.background);
  return <Chip style={categoryStyles.chip} label={label} />;
};

export default Category;
