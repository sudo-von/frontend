import { useState } from 'react';

export interface IUseToggler {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer: (isOpen: boolean) => (event: KeyboardEvent) => void;
}

const useToggler = (): IUseToggler => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (isOpen: boolean) => (event: KeyboardEvent) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(isOpen);
  };
  return { open, setOpen, toggleDrawer };
};

export default useToggler;
