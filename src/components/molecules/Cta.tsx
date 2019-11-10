import { Box } from 'reflexbox';
import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../../styles/variables';

export const Cta = styled(Box)<{ variant?: 'left' | 'right' }>`
    position: relative;
    cursor: pointer;
    color: ${colors.dark};
    @media (min-width: ${breakpoints.lg}px) {
        position: absolute;
        ${({ variant = 'right' }) =>
            variant === 'right'
                ? css`
                      bottom: -25%;
                      width: 25rem;
                      right: -1rem;
                  `
                : css`
                      bottom: -25%;
                      width: 25rem;
                      left: -1rem;
                  `}
    }
    background: ${colors.cta};
    min-height: 10rem;
    padding: 1rem 2rem;
    width: 100%;
    > svg {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }
    font-size: 1.5em;
    ::after {
        opacity: 1;
        content: '';
        height: 100%;
        width: 100%;
        background: #303947;
        position: absolute;
        left: -1rem;
        bottom: -1rem;
        z-index: -1;
        user-select: none;
    }
    @media (max-width: ${breakpoints.lg}px) {
        margin-bottom: -4rem !important;
        z-index: 1;

        ::after {
            opacity: 0;
        }
    }
`;
