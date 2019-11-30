import React, { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
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
    padding: 1rem;
    border: none;
    min-width: 10rem;

    ${({ variant }) =>
        variant === 'primary' &&
        css`
            box-shadow: 0 0 0 1px ${colors.dark}, inset 0 0 0 1px ${colors.dark};

            color: ${colors.dark};
        `}
    background: ${({ variant }) => (variant === 'accent' ? colors.accent : 'white')};
    color: ${({ variant }) => (variant === 'accent' ? 'white' : `${colors.dark}`)};
    :hover {
        background: ${({ variant }) => (variant === 'accent' ? '#b74a35' : 'white')};
        ${({ variant }) =>
            variant === 'primary' &&
            css`
                background: ${colors.ui.light};
            `}
    }

    :active {
        background: ${({ variant }) => (variant === 'accent' ? '#a54330' : colors.dark)};
        color: white;

    }

    :disabled{
        opacity: 0.5;
    }
`;
