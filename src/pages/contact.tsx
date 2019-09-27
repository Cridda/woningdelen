import React, { FC } from 'react';
import ContactForm from '../components/organisms/ContactForm';
import useMenuState from '../hooks/useMenuState';

const contact: FC = () => {
    // tslint:disable-next-line: react-hooks-nesting
    const { menuProps } = useMenuState(true);
    return <ContactForm variant={'red'} {...menuProps} />;
};

export default contact;
