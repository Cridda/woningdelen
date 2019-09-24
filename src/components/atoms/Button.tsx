import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

type Variant = 'accent' | 'primary';
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }> = ({
    variant = 'primary',
    ...props
}) => {
    return <StyledButton variant={variant} {...props} />;
};

export default Button;

const StyledButton = styled.button<{ variant: Variant }>`
    margin: 0;
    padding: 1.5rem;
    border: none;
    background: ${({ variant }) => (variant === 'accent' ? colors.accent : '#222222')};
    color: ${({ variant }) => (variant === 'accent' ? 'white' : '#bcbec0')};
    text-transform: uppercase;
    :hover {
        background: ${({ variant }) => (variant === 'accent' ? '#b74a35' : 'darkslategray')};
    }

    :active {
        background: ${({ variant }) => (variant === 'accent' ? '#a54330' : 'darkslategray')};
    }
`;
