import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import React, { FC } from 'react';
import ContactForm from '../components/organisms/ContactForm';
import useMenuState from '../hooks/useMenuState';

const contact: FC<RouteComponentProps> = props => {
    // tslint:disable-next-line: react-hooks-nesting
    const { menuProps } = useMenuState(true);

    return (
        <ContactForm
            onCloseHandler={() =>
                navigate(props.location && props.location.state ? props.location.state.prevPath : '/')
            }
            variant={'red'}
            {...menuProps}
        />
    );
};

export default contact;
