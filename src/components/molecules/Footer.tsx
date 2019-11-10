import React, { FC } from 'react';
import styled from 'styled-components';
import { breakpoints, colors, widths } from '../../styles/variables';
import Fb from '../atoms/Fb';
import Insta from '../atoms/Insta';

const Footer: FC = () => {
    return (
        <Container>
            <Inner>
                <Social>
                    <a href={'https://www.instagram.com/woningendelen/'} target={'blank'}>
                        <Insta />
                    </a>
                    <a href={'https://www.facebook.com/Woningendelen/'} target={'blank'}>
                        <Fb />
                    </a>
                </Social>
                <Rights>
                    <h3>woningendelen.nl</h3>
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
    color: ${colors.dark};
    width: 50%;
    > a {
        color: inherit;
    }
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
    width: ${widths.xl}px;
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
