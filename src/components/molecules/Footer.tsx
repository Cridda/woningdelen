import React, { FC } from 'react';
import styled from 'styled-components';
import { breakpoints, widths } from '../../styles/variables';
import Amsterdam from '../atoms/Amsterdam';
import Fb from '../atoms/Fb';
import Insta from '../atoms/Insta';

const Footer: FC = () => {
    return (
        <Container>
            <AmsterdamWrapper>
                <Amsterdam />
            </AmsterdamWrapper>
            <Inner>
                <Social>
                    <Insta />
                    <Fb />
                </Social>
                <Rights>
                    <h2>woningdelen.nl</h2>
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
    > h2 {
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

const AmsterdamWrapper = styled.div`
    background: white;
    position: absolute;
    left: calc(50% - 10px);
    top: -5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    height: 6rem;
    align-items: center;
    color: #c8543c;
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
