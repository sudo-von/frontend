import { useContext } from 'react';
import {
  ThemeContext,
  IThemeContext,
} from 'src/contexts/ThemeContext/ThemeContext';
import { ReactComponent as Sun } from 'src/assets/svg/navbar/sun.svg';
import { ReactComponent as Moon } from 'src/assets/svg/navbar/moon.svg';
import TogglerButton from 'src/components/Navbar/Components/TogglerButton/TogglerButton';

const Toggler = (): JSX.Element => {
  const { theme, toggleTheme }: IThemeContext = useContext(ThemeContext);
  return (
    <TogglerButton
      onClick={toggleTheme}
      title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
    >
      <Sun />
      <Moon />
    </TogglerButton>
  );
};

export default Toggler;
