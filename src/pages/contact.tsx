import { RouteComponentProps } from '@reach/router';
import React, { FC } from 'react';
import ContactForm from '../components/organisms/ContactForm';
import useMenuState from '../hooks/useMenuState';

const Contact: FC<RouteComponentProps> = () => {
    const { menuProps } = useMenuState(true);
    return <ContactForm onCloseHandler={() => history.back()} variant={'red'} {...menuProps} />;
};

export default Contact;
