import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Container from '../components/Container';
import Page from '../components/Page';
import { IndexImageQuery } from '../generated/graphql';
import IndexLayout from '../layouts';

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
    const { indexImage, indexImage2, indexImage3 } = useStaticQuery<IndexImageQuery>(indexImageQuery);

    return (
        <IndexLayout>
            <Page>
                <Container>
                    <h1 style={{ fontSize: '10vmin' }}>
                        Gewoon. <br />
                        Zorgeloos verhuren.
                    </h1>
                    <Button>Omzettingsvergunning</Button>
                </Container>
            </Page>
            {indexImage && indexImage.childImageSharp && (
                <Image style={backgroundStyle} fluid={indexImage.childImageSharp.fluid as FluidObject} />
            )}
            {indexImage2 && indexImage2.childImageSharp && (
                <Image style={backgroundStyle} fluid={indexImage2.childImageSharp.fluid as FluidObject} />
            )}
            {indexImage3 && indexImage3.childImageSharp && (
                <Image style={backgroundStyle} fluid={indexImage3.childImageSharp.fluid as FluidObject} />
            )}
        </IndexLayout>
    );
};

export default IndexPage;

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
