import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
    return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
    color: white;
    margin: 0;
    padding: 1rem;
    border: none;
    background: #c8543c;
    text-transform: uppercase;
    :hover {
        background: #b74a35;
    }

    :active {
        background: #a54330;
    }
`;
