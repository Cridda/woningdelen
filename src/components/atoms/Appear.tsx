import React, { FunctionComponent } from 'react';
import withViewport, { InnerViewportProps, OuterViewportProps, ViewportProps } from 'react-in-viewport';
import styled from 'styled-components';
import isApp from '../../constants/isApp';

type Props = ViewportProps & { as?: keyof JSX.IntrinsicElements };

const AppearWrapper = styled.section<Props>`
    transform: translateY(${({ enterCount }) => (enterCount >= 1 ? '0' : '6rem')});
    opacity: ${({ enterCount }) => (enterCount >= 1 ? 1 : 0)};
    transition: opacity 750ms, transform 750ms;
`;

// need to forward ref
const Appear: FunctionComponent<Props> = ({ innerRef, as, ...rest }) => {
    return isApp() ? <section {...rest} /> : <AppearWrapper as={as} ref={innerRef} {...rest} />;
};

export default withViewport<
    InnerViewportProps,
    OuterViewportProps & React.HTMLAttributes<HTMLElement> & { as?: keyof JSX.IntrinsicElements }
>(Appear, {}, { disconnectOnLeave: true });
