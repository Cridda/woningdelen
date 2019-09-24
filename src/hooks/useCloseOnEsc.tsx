import { useCallback, useEffect } from 'react';

interface HookProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const useCloseOnEsc = ({ open, setOpen }: HookProps) => {
    const escHandler = useCallback(
        (event: KeyboardEvent) => {
            if (open && event.keyCode === 27) {
                setOpen(false);
            }
        },
        [open, setOpen]
    );
    useEffect(() => {
        window.addEventListener('keydown', escHandler);
        return () => window.removeEventListener('keydown', escHandler);
    }, [escHandler]);
};
