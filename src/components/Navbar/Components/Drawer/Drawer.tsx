import {
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styles } from 'src/components/Navbar/Components/Drawer/Drawer.styles';
import { pageList, Page } from 'src/components/Navbar/Components/Drawer/data';

type DrawerProps = {
  open: boolean;
  // eslint-disable-next-line react/require-default-props
  toggleDrawer: (isOpen: boolean) => (event: KeyboardEvent) => void;
};

const Drawer = ({ open, toggleDrawer }: DrawerProps) => {
  return (
    <MaterialDrawer open={open} onClose={toggleDrawer(false)}>
      <div
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
        style={styles.div}
      >
        <List>
          {pageList.map(({ name, path, svg }: Page) => (
            <Link to={path} key={name} style={styles.link}>
              <ListItem button key={name}>
                <ListItemIcon>{svg}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </MaterialDrawer>
  );
};

export default Drawer;
