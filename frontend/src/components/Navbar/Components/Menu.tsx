import { Button, Icon } from 'src/components';
import { ReactComponent as MenuSvg } from 'src/assets/svg/navbar/menu.svg';
import useToggler, { IUseToggler } from 'src/hooks/useToggler';
import Drawer from 'src/components/Navbar/Components/Drawer/Drawer';

const Menu = () => {
  const { open, setOpen, toggleDrawer }: IUseToggler = useToggler();
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        startIcon={<Icon svg={<MenuSvg />} />}
      >
        Menú
      </Button>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Menu;
