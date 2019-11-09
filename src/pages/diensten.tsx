import { graphql, Link, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import Appear from '../components/atoms/Appear';
import Arrow from '../components/atoms/Arrow';
import Button from '../components/atoms/Button';
import Done from '../components/atoms/Done';
import Block from '../components/molecules/Block';
import { Cta } from '../components/molecules/Cta';
import ContactForm from '../components/organisms/ContactForm';
import Page from '../components/Page';
import { DienstenImageQuery } from '../generated/graphql';
import useMenuState from '../hooks/useMenuState';
import IndexLayout from '../layouts';
import { colors, widths } from '../styles/variables';

export const dienstenImageQuery = graphql`
    query DienstenImage {
        dienstenImage: file(relativePath: { eq: "diensten.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2560) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        together: file(relativePath: { eq: "together.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Diensten = () => {
    const { dienstenImage, together } = useStaticQuery<DienstenImageQuery>(dienstenImageQuery);
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
                        <Flex flexDirection={['column', 'row']}>
                            <Box width={[1, 1 / 2]} pr={4} pb={[5, 0]}>
                                <h1>Wij streven bij naar de beste service.</h1>
                                <h3>Van omzettingsvergunningen tot bouwbegeleiding</h3>
                                <p>
                                    Samen kijken wat we voor u kunnen betekenen is een eerste, het realiseren daarvan is
                                    ons streven. Neem een kijkje in onze dienstpakketten hieronder.
                                </p>
                            </Box>
                            <Box width={[1, 1 / 2]} mt={'-4rem'}>
                                {together && together.childImageSharp && (
                                    <Img fluid={together.childImageSharp.fluid as FluidObject} />
                                )}
                            </Box>
                        </Flex>
                        <Cta onClick={() => cta.setOpen(true)}>
                            <Header>Vrijblijvend advies?</Header>
                            Neem nu snel contact op!
                            <Arrow />
                        </Cta>
                    </Block>
                    <Block>
                        <Header>Aanvraag omzettingsvergunning voor 3 of 4 huurders</Header>

                        <Features
                            features={[
                                'Inventarisatie van de bouwtechnische eisen',
                                'Opstellen van de puntentelling',
                                'Kadastrale stukken opvragen',
                                'Bouwtechnische tekeningen en toetsing met betrekking tot het bouwbesluit',
                            ]}
                        />
                        <Link to={'/contact'} style={{ marginLeft: 'auto' }}>
                            <Button>Aanvragen</Button>
                        </Link>
                    </Block>
                    <Block right>
                        <Header>Aanvraag omzettingsvergunning voor 5+ huurders</Header>
                        <Features
                            features={[
                                'Inventarisatie van de bouwtechnische eisen',
                                'Opstellen van de puntentelling',
                                'Kadastrale stukken opvragen',
                                'Bouwtechnische tekeningen en toetsing met betrekking tot het bouwbesluit',
                                'Onderzoek naar eventuele conclaven met het bestemmingsplan',
                            ]}
                        />
                        <Link to={'/contact'}>
                            <Button>Aanvragen</Button>
                        </Link>
                    </Block>

                    <Block>
                        <Header>Advies en mogelijkheden puntentelling</Header>
                        <p>
                            Als uw huis boven de 146 punten scoort, mag u uw huis verhuren in de vrijesector. Dit
                            betekent dat u zelf uw huur mag bepalen.
                        </p>
                        <Link to={'/contact'} style={{ marginLeft: 'auto' }}>
                            <Button>Aanvragen</Button>
                        </Link>
                    </Block>

                    <Block right>
                        <Header>Bouwbegeleiding en verbouw</Header>
                        <Features
                            features={[
                                'Indicatie van de verplichte bouwkosten isolatie',
                                'Indicatie bouwkosten',
                                'Keuze aannemer',
                                'Oplevering',
                                'Aanbouw',
                                'Opbouw',
                            ]}
                        />
                        <Link to={'/contact'}>
                            <Button>Aanvragen</Button>
                        </Link>
                    </Block>

                    <Block>
                        <Header>Overige diensten</Header>
                        <Features
                            features={[
                                'Vooronderzoek; hier kijken we wat mogelijk is voor uw woning',
                                'Inmeten op locatie',
                                'Inmeten en indelen (inclusief plattegronden)',
                                'Informeren bestemmingsplan mogelijkheden 5+ woningdelers',
                            ]}
                        />
                        <Link to={'/contact'} style={{ marginLeft: 'auto' }}>
                            <Button>Aanvragen</Button>
                        </Link>
                    </Block>
                </Container>
            </Page>
            <ContactForm {...cta.menuProps} />
        </IndexLayout>
    );
};

export default Diensten;

const Features = (props: { features: string[] }) => (
    <Box pb={3}>
        {props.features.map((feature, i) => (
            <Appear key={i}>
                <Flex mt={'25px'}>
                    <Done fill={colors.accent} />
                    <Box ml={3}>
                        <h4 style={{ marginTop: '0.2rem' }}>{feature}</h4>
                    </Box>
                </Flex>
            </Appear>
        ))}
    </Box>
);

const Container = styled(Flex)`
    background: #333333;
`;

const Header = styled.h3`
    padding-left: 3rem;
    position: relative;
    font-weight: 500;
    ::before {
        position: absolute;
        left: 0;
        top: 0.8rem;
        content: '';
        height: 3px;
        width: 2rem;
        background: currentColor;
    }
`;

// const Price = styled.div`
//     position: absolute;
//     background: ${colors.dark};
//     height: 5rem;
//     width: 5rem;
//     border-radius: 50%;
//     display: flex;
//     bottom: -2.5rem;
//     > * {
//         color: white;
//         margin: auto;
//     }
//     ::after {
//         opacity: 0;
//         content: '';
//         height: 100%;
//         width: 100%;
//         background: #444444;
//         position: absolute;
//         bottom: -0.25rem;
//         z-index: -1;
//         user-select: none;
//         border-radius: 50%;
//     }
//     transition: all 200ms;
//     :hover {
//         transform: rotate(15deg) scale(1.1);
//     }
// `;
