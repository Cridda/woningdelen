import React, { AnchorHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const TextButton: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = props => {
    return <Button {...props} />;
};

export default TextButton;

const Button = styled.a`
    font-weight: bold;
    color: ${colors.dark};
`;
