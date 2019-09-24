import { useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { useCloseOnEsc } from './useCloseOnEsc';

export interface MenuStateProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuRef: React.MutableRefObject<null>;
}

const useMenuState = (initialState?: boolean) => {
    const [open, setOpen] = useState(!!initialState);
    const menuRef = useRef(null);
    useCloseOnEsc({ open, setOpen });
    useOnClickOutside(menuRef, () => setOpen(false));
    return { open, setOpen, menuProps: { open, setOpen, menuRef } };
};

export default useMenuState;
