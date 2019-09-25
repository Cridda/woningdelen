import { graphql, Link, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import Appear from '../components/atoms/Appear';
import Arrow from '../components/atoms/Arrow';
import Page from '../components/Page';
import { DienstenImageQuery } from '../generated/graphql';
import IndexLayout from '../layouts';
import { widths } from '../styles/variables';

export const dienstenImageQuery = graphql`
    query DienstenImage {
        dienstenImage: file(relativePath: { eq: "index3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Diensten = () => {
    const { dienstenImage } = useStaticQuery<DienstenImageQuery>(dienstenImageQuery);

    return (
        <IndexLayout>
            <Page style={{ background: '#333333' }}>
                <Container width={[widths.xl]} flexDirection={'column'} mx={'auto'} pt={5}>
                    {dienstenImage && dienstenImage.childImageSharp && (
                        <Img
                            fluid={dienstenImage.childImageSharp.fluid as FluidObject}
                            style={{
                                position: 'absolute',
                                zIndex: 0,
                                left: '0',
                                top: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    )}
                    <Block right>
                        <Header>Diensten</Header>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sed praesentium quo earum
                            saepe nihil esse eum, ullam nobis, ab eos rerum laudantium aliquam consectetur id inventore
                            mollitia omnis velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                            dignissimos. Ea vel voluptatum soluta. Esse illum, amet illo eius, cupiditate exercitationem
                            voluptate earum tationem voluptate earum voluptatem provident at quidem vitae aspernatur
                            natus.
                        </p>
                        <ul>
                            <li>
                                <Link to="/a-markdown-page/">Show me some Markdown!</Link>
                            </li>
                            <li>
                                <Link to="/">Take me back home.</Link>
                            </li>
                        </ul>
                        <Cta>
                            <Header>Woning delen?</Header>
                            Neem nu contact op!
                            <Arrow />
                        </Cta>
                    </Block>
                    <Block>
                        <Header>Diensten</Header>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sed praesentium quo earum
                            saepe nihil esse eum, ullam nobis, ab eos rerum laudantium aliquam consectetur id inventore
                            mollitia omnis velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                            dignissimos. Ea vel voluptatum soluta. Esse illum, amet illo eius, cupiditate exercitationem
                            voluptate earum tationem voluptate earum voluptatem provident at quidem vitae aspernatur
                            natus.
                        </p>
                        <ul>
                            <li>
                                <Link to="/a-markdown-page/">Show me some Markdown!</Link>
                            </li>
                            <li>
                                <Link to="/">Take me back home.</Link>
                            </li>
                        </ul>
                    </Block>
                    <Block right>
                        <Header>Diensten</Header>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sed praesentium quo earum
                            saepe nihil esse eum, ullam nobis, ab eos rerum laudantium aliquam consectetur id inventore
                            mollitia omnis velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                            dignissimos. Ea vel voluptatum soluta. Esse illum, amet illo eius, cupiditate exercitationem
                            voluptate earum tationem voluptate earum voluptatem provident at quidem vitae aspernatur
                            natus.
                        </p>
                        <ul>
                            <li>
                                <Link to="/a-markdown-page/">Show me some Markdown!</Link>
                            </li>
                            <li>
                                <Link to="/">Take me back home.</Link>
                            </li>
                        </ul>
                    </Block>

                    <Block>
                        <Header>Diensten</Header>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sed praesentium quo earum
                            saepe nihil esse eum, ullam nobis, ab eos rerum laudantium aliquam consectetur id inventore
                            mollitia omnis velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                            dignissimos. Ea vel voluptatum soluta. Esse illum, amet illo eius, cupiditate exercitationem
                            voluptate earum tationem voluptate earum voluptatem provident at quidem vitae aspernatur
                            natus.
                        </p>
                        <ul>
                            <li>
                                <Link to="/a-markdown-page/">Show me some Markdown!</Link>
                            </li>
                            <li>
                                <Link to="/">Take me back home.</Link>
                            </li>
                        </ul>
                    </Block>
                </Container>
            </Page>
        </IndexLayout>
    );
};

export default Diensten;

const Cta = styled(Box)`
    position: absolute;
    bottom: -40%;
    background: #f9ea1d;
    min-height: 10rem;
    width: 25rem;
    padding: 1rem 2rem;
    right: 0;
`;

const Block = styled(Appear)<{ right?: boolean }>`
    max-width: ${widths.md}px;
    background: white;
    position: relative;
    padding: 1rem 2rem;
    align-self: ${({ right = false }) => (right ? 'flex-end' : 'flex-start')};
    :last-of-type {
        margin-bottom: 3rem;
    }
`;
const Container = styled(Flex)`
    background: #333333;

    > ${Block} + ${Block} {
        margin-top: 3rem;
    }
`;

const Header = styled.h2`
    padding-left: 4rem;
    position: relative;

    ::before {
        position: absolute;
        left: 0;
        top: 1rem;
        content: '';
        height: 3px;
        width: 2.5rem;
        background: currentColor;
    }
`;
