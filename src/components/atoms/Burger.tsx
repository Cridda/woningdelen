import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/variables';

const Burger: FC<ButtonHTMLAttributes<HTMLButtonElement> & { open: boolean }> = props => {
    return (
        <StyledButton {...props}>
            <div />
            <div />
            <div />
        </StyledButton>
    );
};

export default Burger;

const StyledButton = styled.button<{ open: boolean }>`
    position: absolute;
    top: 3rem;
    @media (max-width: ${breakpoints.sm}px) {
        top: 2.5rem;
    }
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 11;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => (open ? colors.black : colors.accent1)};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;
