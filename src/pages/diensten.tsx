import { graphql, Link, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import Arrow from '../components/atoms/Arrow';
import Block from '../components/molecules/Block';
import { Cta } from '../components/molecules/Cta';
import ContactForm from '../components/organisms/ContactForm';
import Page from '../components/Page';
import { DienstenImageQuery } from '../generated/graphql';
import useMenuState from '../hooks/useMenuState';
import IndexLayout from '../layouts';
import { widths } from '../styles/variables';

export const dienstenImageQuery = graphql`
    query DienstenImage {
        dienstenImage: file(relativePath: { eq: "diensten.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2560) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Diensten = () => {
    const { dienstenImage } = useStaticQuery<DienstenImageQuery>(dienstenImageQuery);
    const cta = useMenuState();

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
                        <p>Hieronder vindt u de diensten die wij aanbieden:</p>
                        <ul>
                            <li>
                                <Link to="/a-markdown-page/">Show me some Markdown!</Link>
                            </li>
                            <li>
                                <Link to="/">Take me back home.</Link>
                            </li>
                        </ul>
                        <Cta onClick={() => cta.setOpen(true)}>
                            <Header>Woning delen?</Header>
                            Neem nu snel contact op!
                            <Arrow />
                        </Cta>
                    </Block>
                    <Block>
                        <Header>Pakket 1A</Header>
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
            <ContactForm {...cta.menuProps} />
        </IndexLayout>
    );
};

export default Diensten;

const Container = styled(Flex)`
    background: #333333;
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
