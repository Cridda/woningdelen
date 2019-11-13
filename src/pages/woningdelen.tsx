import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import FeatureIcon from '../components/atoms/FeatureIcon';
import Block from '../components/molecules/Block';
import Features from '../components/molecules/Features';
import ContactForm from '../components/organisms/ContactForm';
import Page from '../components/Page';
import { WoningdelenImageQuery } from '../generated/graphql';
import useMenuState from '../hooks/useMenuState';
import IndexLayout from '../layouts';
import { widths } from '../styles/variables';

export const woningdelenImageQuery = graphql`
    query WoningdelenImage {
        woningdelenImage: file(relativePath: { eq: "woningdelen.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        together: file(relativePath: { eq: "documents.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Woningdelen = () => {
    const { woningdelenImage, together } = useStaticQuery<WoningdelenImageQuery>(woningdelenImageQuery);
    const cta = useMenuState();

    return (
        <IndexLayout>
            <Page style={{ background: '#333333' }}>
                <Container width={[widths.xl]} flexDirection={'column'} mx={'auto'} pt={5}>
                    {woningdelenImage && woningdelenImage.childImageSharp && (
                        <Img
                            fluid={woningdelenImage.childImageSharp.fluid as FluidObject}
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
                    <Block width={'full'} right>
                        <Flex flexDirection={['column', 'row']}>
                            <Box width={[1, 1 / 2]} pb={[5, 0]} pr={[0, 3]}>
                                <h1 style={{ wordWrap: 'break-word' }}>Omzettingsvergunning</h1>
                                <h3>
                                    De gemeente Amsterdam Heeft per 1 januari 2017 een nieuw beleid voor woningdelen
                                    opgesteld.
                                </h3>
                                <p>
                                    Onder woningdelen wordt verstaan; het delen van een woning door drie of meer
                                    volwassenen, die onderling geen gezinsrelatie hebben. De gemeente kent twee vormen
                                    van woningdelen: <strong>Inwoning</strong> en <strong>kamergewijze verhuur</strong>.
                                    Voor inwoning is geen vergunning verreist, voor kamergewijze verhuur wel. Bij het
                                    verlenen van een vergunning worden verschillende voorwaarden gesteld aan de
                                    gemeenschappelijke ruimte en geluidsisolatie. Bij kamerverhuur aan vijf of meer
                                    volwassenen gelden aanvullende voorwaarden.
                                </p>
                            </Box>
                            <Box width={[1, 1 / 2]} mt={'-4rem'}>
                                {together && together.childImageSharp && (
                                    <Img fluid={together.childImageSharp.fluid as FluidObject} />
                                )}
                            </Box>
                        </Flex>
                        <Seperator />
                        <h3>Voorwaarden voor het omzetten van een woning naar 3 of 4 onzelfstandige woonruimte</h3>
                        <Features
                            variant={'small'}
                            features={[
                                `De woning beschikt over een gemeenschappelijke verblijfsruimte van ten minste 11 m2 met een minimale breedte van 3 meter (art. 4.3 lid 4 Bouwbesluit).
Er moet een gemeenschappelijke ruimte voor de bewoners zijn. Deze ruimte moet een ruimte zijn die bestemd is voor het ‘verblijven’ van personen. Het mag dus geen bad- of slaapkamer zijn; het moet een verblijfsruimte, zoals een woonkamer of een woonkeuken, zijn.
`,
                                `Er wordt voldaan aan de eisen voor geluidsisolatie. Deze eisen zijn op de website van de gemeente Amsterdam te vinden.8 Oudere woningen met houten vloeren/plafonds voldoen in de regel niet aan deze eisen. Deze woningen vergen dus bouwkundige maatregelen om aan de eisen te voldoen.`,
                            ]}
                            icon={<FeatureIcon />}
                        />
                        <Seperator />
                        <h3>Voorwaarden voor het omzetten van een woning naar 5 of meer onzelfstandige woonruimte</h3>
                        <Features
                            variant={'small'}
                            features={[
                                `De te realiseren onzelfstandige woonruimtes worden beheerd door een instelling die zich krachtens haar statuten richt op de verhuur en het beheer van onzelfstandige woonruimte (bijv. voor jongeren, studenten, of huishoudens met een specifieke zorgbehoefte). De instelling is tevens als zodanig ingeschreven bij de Kamer van Koophandel. Het beheer dient dus uitbesteed te zijn aan een professionele beheerder en mag de verhuurder niet in eigen hand houden.`,
                                `Van het totaalaantal woningen dat door eenzelfde trappenhuis of galerij wordt ontsloten, of onderdeel uit maakt van hetzelfde bouwblok bij eengezinswoningen, kan maximaal 25% van het totaalaantal woningen worden omgezet in woningen met 5 of meer onzelfstandige woonruimten. Wordt een woning door meerdere trappenhuizen ontsloten, dan geldt een maximum van 25% van het totaalaantal woningen per verdieping. Voor wooncomplexen waarop de gegeven omschrijving niet van toepassing is, omdat sprake is van een afwijkende ontsluitingssystematiek, interne indeling of complexplattegrond, maakt het Dagelijks Bestuur een individuele afweging, waarbij de uitgangspunten van bovenstaande regeling zoveel mogelijk analoog worden toegepast.
                                De gemeente wil met deze voorwaarde overbewoning in een woningcomplex tegengaan.
                                `,
                                `Het percentage woningen met 5 of meer kamers is, in het stadsdeel waar de om te zetten woning zich bevindt, niet hoger dan of gelijk aan het stedelijk gemiddelde (op basis van het meest recente onderzoek Wonen in Amsterdam)10.
                                Ook heeft de gemeente willen voorkomen dat in de stadsdelen geen wanverhouding ontstaat tussen zelfstandige woningen met 5 kamers of meer en woningen die zijn omgezet naar 5 of meer onzelfstandige woonruimten. Of dat in een stadsdeel bijna geen grote zelfstandige woningen meer over zijn. Onduidelijk is hoe de gemeente dit toetst en hoe kan worden geverifieerd of die toetsing correct is uitgevoerd.
                                `,
                            ]}
                            icon={<FeatureIcon />}
                        />
                        <h5 style={{ color: '#5f6772', fontSize: '1.2rem' }}>
                            Aan het aanvragen van een vergunning zijn kosten verbonden: € 533,50 per woning of gedeelte
                            daarvan (prijspeil 2017). Dit zijn eenmalige kosten.
                        </h5>
                        <Seperator />
                        <h3>Handhaving</h3>
                        <p>De gemeente heeft boetes gesteld op het omzetten van een woning zonder vergunning.</p>
                        De boetes zijn:
                        <Features
                            variant={'small'}
                            features={[
                                `€6.000,- (en bij herhaalde overtreding €20.500) voor het omzetten een
                                zelfstandige woning in maximaal 4 onzelfstandige woonruimten zonder vergunning;`,
                                `€18.000,- (en
                                    bij herhaalde overtreding €20.500) voor het omzetten een zelfstandige woning in minimaal 5
                                    onzelfstandige woonruimten zonder vergunning.`,
                            ]}
                            icon={<FeatureIcon />}
                        />
                        <p>
                            De gemeente kan via het Basisregistratie Personen (BRP) eenvoudig vaststellen wie op welk
                            adres staan ingeschreven. Als de gemeente een overtreding vaststelt wordt dit gehandhaafd.
                            Dit wordt gedaan doormiddel van een boete. De boete wordt bij de eigenaar van de woning
                            opgelegd. Ook als de woning is verhuurd. De gemeente kan er ook voor kiezen om de boete bij
                            de huurders op te leggen. Het opleggen van een boete door de gemeente is altijd een besluit
                            waar bezwaar en beroep tegen openstaat. <br /> <br /> (bron: &nbsp;
                            <a href={'https://www.hielkemaco.nl/nieuws/amsterdam-woongroepenbeleid-afgeschaft/'}>
                                https://www.hielkemaco.nl/nieuws/amsterdam-woongroepenbeleid-afgeschaft/)
                            </a>
                        </p>
                    </Block>
                </Container>
            </Page>
            <ContactForm {...cta.menuProps} />
        </IndexLayout>
    );
};

export default Woningdelen;

const Container = styled(Flex)`
    background: #333333;
`;

const Seperator = styled.hr`
    height: 1px;
    width: 100%;
    background: #99a0aa;
`;
