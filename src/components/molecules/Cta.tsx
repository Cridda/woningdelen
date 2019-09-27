import { Box } from 'reflexbox';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/variables';

export const Cta = styled(Box)`
    position: relative;
    cursor: pointer;
    @media (min-width: ${breakpoints.lg}px) {
        position: absolute;
        bottom: -40%;
        width: 25rem;
        right: -1rem;
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
        background: #333333;
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
