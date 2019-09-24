import React, { FC } from 'react';
import styled from 'styled-components';
import { getEmSize } from '../styles/mixins';
import { widths } from '../styles/variables';

const StyledContainer = styled.div`
    position: relative;
    margin: auto;
    width: auto;
    max-width: ${getEmSize(widths.lg)}em;
    color: white;
    text-align: center;
`;

interface ContainerProps {
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
    <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
