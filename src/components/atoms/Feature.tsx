import React, { FC } from 'react';
import styled from 'styled-components';

const Feature: FC = props => {
    return <Container {...props} />;
};

export default Feature;

const Container = styled.div`
    width: 300px;
    display: flex;
    height: 100%;
    /* position: absolute; */
    /* left: -250px; */
    top: 0;
    border-radius: 2px;
    > svg {
        margin: auto;
    }
`;
