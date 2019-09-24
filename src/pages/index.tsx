import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Page from '../components/Page';
import { IndexImageQuery } from '../generated/graphql';
import IndexLayout from '../layouts';
import { colors } from '../styles/variables';

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
                fluid(maxWidth: 1000) {
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

    return (
        <IndexLayout>
            <Page>
                <Container>
                    <h1 style={{ fontSize: '8vmin' }}>
                        Gewoon. <br />
                        Zorgeloos verhuren.
                    </h1>
                    <Button variant={'accent'}>Omzettingsvergunning</Button>
                    <Button variant={'accent'}>Advies</Button>
                </Container>
            </Page>
            {indexImage2 && indexImage2.childImageSharp && (
                <Image style={backgroundStyle} fluid={indexImage2.childImageSharp.fluid as FluidObject} />
            )}
        </IndexLayout>
    );
};

export default IndexPage;

const Container = styled.div`
    color: white;
    background: ${colors.gray.calm};
    margin: auto 0 auto auto;
    padding: 2rem 28vw 2rem 2rem;
    > button + button {
        margin-left: 1rem;
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
