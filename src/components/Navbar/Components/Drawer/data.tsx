import HomeIcon from '@mui/icons-material/Home';

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
];
