import React, { FC } from 'react';
import styled from 'styled-components';
import { breakpoints, widths } from '../../styles/variables';
import Fb from '../atoms/Fb';
import Insta from '../atoms/Insta';

const Footer: FC = () => {
    return (
        <Container>
            <Inner>
                <Social>
                    <Insta />
                    <Fb />
                </Social>
                <Rights>
                    <h3>woningdelen.nl</h3>
                </Rights>
            </Inner>
        </Container>
    );
};

export default Footer;

const Rights = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    > h3 {
        margin: 0;
    }

    @media (max-width: ${breakpoints.sm}px) {
        justify-content: flex-start;
    }
`;

const Social = styled.div`
    width: 50%;
    > * + * {
        margin-left: 1rem;
    }
`;

const Container = styled.footer`
    background: white;
    display: flex;
    position: relative;
`;

const Inner = styled.div`
    width: ${widths.lg}px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-wrap: nowrap;

    @media (max-width: ${breakpoints.sm}px) {
        flex-direction: column;
    }

    > * {
        @media (max-width: ${breakpoints.sm}px) {
            width: 100%;
        }
    }
`;
