import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { breakpoints, colors, widths } from '../../styles/variables';
import Appear from '../atoms/Appear';

interface Props {
    right?: boolean;
    width?: 'full' | 'twoThird';
    variant?: 'light' | 'dark';
}
const Block: FC<Props> = props => {
    return <StyledBlock {...props} />;
};

export default Block;

const StyledBlock = styled(Appear)<Props>`
    width: ${({ width = 'twoThird' }) => (width === 'twoThird' ? widths.md : widths.xl)}px;

    @media (max-width: ${breakpoints.xl}px) {
        width: 100%;
    }

    ${({ variant = 'light' }) =>
        variant === 'light'
            ? css`
                  background: white;
              `
            : css`
                  background: ${colors.dark};
                  color: white;
              `}
    position: relative;
    padding: 2rem 1.5rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-self: ${({ right = false }) => (right ? 'flex-end' : 'flex-start')};
    :last-of-type {
        margin-bottom: 3rem;
    }
    + section {
        margin-top: 3rem;
    }

    ::after {
        content: '';
        width: 2rem;
        height: 7rem;
        bottom: -5rem;
        position: absolute;
        left: ${({ right }) => (right ? '30%' : '70%')};
        background: white;
        transform: rotate(${({ right }) => (right ? '45deg' : '-45deg')});
        border-radius: 1rem;
    }
`;
