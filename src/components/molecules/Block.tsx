import React, { FC } from 'react';
import styled from 'styled-components';
import { breakpoints, widths } from '../../styles/variables';
import Appear from '../atoms/Appear';

interface Props {
    right?: boolean;
}
const Block: FC<Props> = props => {
    return <StyledBlock {...props} />;
};

export default Block;

const StyledBlock = styled(Appear)<Props>`
    width: ${widths.md}px;

    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
    }
    background: white;
    position: relative;
    padding: 1rem 2rem;
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
