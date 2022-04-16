import { AppBar, Box } from '@mui/material/';
import { styles } from 'src/components/Navbar/Navbar.styles';
import { useTheme } from 'styled-components';
import Toggler from 'src/components/Navbar/Components/Toggler/Toggler';
import Menu from 'src/components/Navbar/Components/Menu';
import SocialNetworks from 'src/components/Navbar/Components/SocialNetworks/SocialNetworks';

const Navbar = () => {
  const theme = useTheme();
  const appBarStyles = styles(theme).appBar;
  return (
    <AppBar position="sticky" style={appBarStyles}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Menu />
        <Box display="flex" alignItems="center">
          <SocialNetworks />
          <Toggler />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
