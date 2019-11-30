import { graphql, Link, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import AdviceForm from '../components/organisms/AdviceForm';
import Page from '../components/Page';
import { IndexImageQuery } from '../generated/graphql';
import useMenuState from '../hooks/useMenuState';
import IndexLayout from '../layouts';
import { breakpoints, colors } from '../styles/variables';

export const indexImageQuery = graphql`
    query IndexImage {
        indexImage: file(relativePath: { eq: "index.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        indexImage2: file(relativePath: { eq: "index2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2560) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        indexImage3: file(relativePath: { eq: "index3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const backgroundStyle = { position: 'absolute', zIndex: -1, left: 0, top: 0, width: '100%', height: '100%' };

const IndexPage = () => {
    const { indexImage2 } = useStaticQuery<IndexImageQuery>(indexImageQuery);
    const props = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
        config: { ...config.default },
    });

    const adviceForm = useMenuState();

    // Update spring with new props
    // Stop animation
    return (
        <IndexLayout>
            <Page>
                <Container style={props}>
                    <h1 style={{ fontSize: '8vmin' }}>
                        Omzettingsvergunning <br />
                        voor woningdelers.
                    </h1>
                    <Actions flexDirection={['column', 'row']}>
                        <Box mb={[3, 0, null]} mr={[null, 3]}>
                            <Link to={'/diensten'}>
                                <Button variant={'accent'}>Omzettingsvergunning</Button>
                            </Link>
                        </Box>
                        <Box>
                            <Button variant={'accent'} onClick={() => adviceForm.setOpen(true)}>
                                Advies
                            </Button>
                        </Box>
                    </Actions>
                </Container>
            </Page>
            {indexImage2 && indexImage2.childImageSharp && (
                <Image style={backgroundStyle} fluid={indexImage2.childImageSharp.fluid as FluidObject} />
            )}

            <AdviceForm {...adviceForm.menuProps} />
        </IndexLayout>
    );
};

export default IndexPage;

const Actions = styled(Flex)``;

const Container = styled(animated.div)`
    color: white;
    background: ${colors.gray.calm};
    margin: auto 0 auto auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem 2rem 2rem;
    /* animation: comein 700ms 500ms forwards; */
    /* transform: translateX(100%); */

    @media (min-width: ${breakpoints.md}px) {
        max-width: 65vw;
    }
    @keyframes comein {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }
`;

const Image = styled(Img)`
    /* opacity: 0;

    :nth-of-type(1) {
        animation: fadein 10s linear 1000ms infinite;
    }
    :nth-of-type(2) {
        animation: fadein 10s linear 5000ms infinite;
    }
    :nth-of-type(3) {
        animation: fadein 10s linear 10000ms infinite;
    } */
    @keyframes fadein {
        0% {
            opacity: 0;
            background-position: 20%;
        }
        20% {
            opacity: 1;
        }
        90% {
            opacity: 1;
            background-position: 0%;
        }
        100% {
            opacity: 0;
        }
    }
`;
