import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';

export type Page = {
  name: string;
  path: string;
  svg: React.ReactNode;
};

export const pageList: Page[] = [
  {
    name: 'Inicio',
    path: '/',
    svg: <HomeIcon />,
  },
  {
    name: 'Blog',
    path: '/blog',
    svg: <ArticleIcon />,
  },
];
