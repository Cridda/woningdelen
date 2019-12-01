import { Field, FieldProps, Formik } from 'formik';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { encode } from 'querystring';
import * as React from 'react';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import { Header } from '../components/atoms/Header';
import Block from '../components/molecules/Block';
import ContactForm from '../components/organisms/ContactForm';
import Page from '../components/Page';
import { OverOnsQuery } from '../generated/graphql';
import useMenuState from '../hooks/useMenuState';
import IndexLayout from '../layouts';
import { breakpoints, widths } from '../styles/variables';

export const overOnsQuery = graphql`
    query OverOns {
        overOnsImage: file(relativePath: { eq: "woningdelen.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2560) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        us: file(relativePath: { eq: "us.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        karelDaan: file(relativePath: { eq: "karelendaan.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const OverOns = () => {
    const { us, overOnsImage, karelDaan } = useStaticQuery<OverOnsQuery>(overOnsQuery);
    const cta = useMenuState();

    return (
        <IndexLayout>
            <Page style={{ background: '#333333' }}>
                <Container width={[widths.xl]} flexDirection={'column'} mx={'auto'} pt={5}>
                    {overOnsImage && overOnsImage.childImageSharp && (
                        <Img
                            fluid={overOnsImage.childImageSharp.fluid as FluidObject}
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
                    <Block width={'full'}>
                        <Flex flexDirection={['column', 'row']}>
                            <Box width={[1, 1 / 2]} pb={[5, 0]} pr={[0, 3]}>
                                <h1 style={{ wordWrap: 'break-word' }}>Over ons</h1>
                                <h4>
                                    Woningen Delen is een klein bedrijf bestaande uit twee jonge en ambitieuze
                                    ondernemers, die een passie hebben voor de gebouwde omgeving.
                                </h4>
                            </Box>
                            <Box width={[1, 1 / 2]} mt={'-4rem'}>
                                {us && us.childImageSharp && <Img fluid={us.childImageSharp.fluid as FluidObject} />}
                            </Box>
                        </Flex>
                    </Block>

                    <Block right>
                        <Header>Roots liggen in de bouwkunde</Header>

                        <p>
                            Karel Neven en Tim van Dijk leerden elkaar kennen bij de opleiding bouwkunde aan de
                            Hogeschool van Amsterdam. Tijdens de studie kwamen zij er achter over dezelfde ambities en
                            interesses te beschikken. Zij vertalen hun kennis op het gebied van bouwkunde in het
                            opstellen van bouwkundige vergunningen voor woningdelers. . Na de invoering van de nieuwe
                            regelgeving omtrent woningdelen in 2017 besloten ze een helpende hand te bieden aan
                            vastgoedhouders die hun vastgoed verhuren aan woningdelers. Dit is het begin van Woningen
                            Delen.
                        </p>
                    </Block>

                    <Block right variant={'dark'} width={'full'}>
                        <Flex flexDirection={['column-reverse', 'row']}>
                            <Box width={[1, 1 / 2]} mt={'-4rem'}>
                                {karelDaan && karelDaan.childImageSharp && (
                                    <Img fluid={karelDaan.childImageSharp.fluid as FluidObject} />
                                )}
                            </Box>
                            <Box width={[1, 1 / 2]} pl={[0, 0, 4]} pb={[5, 0]}>
                                <h1>Team</h1>
                                <h4>Karel Neven (links)</h4>
                                <p>Karel Neven is oprichter en tekenaar bij Woningen Delen.</p>

                                <h4>Tim van Dijk (rechts)</h4>
                                <p>Tim van Dijk is oprichter en tekenaar bij Woningen Delen.</p>
                            </Box>
                        </Flex>
                    </Block>

                    <Block>
                        <Header>Contact opnemen?</Header>

                        <h4>Neem gerust contact op voor een vrijblijvend kennismakingsgesprek.</h4>
                        <h4>
                            <a href={'mailto: info@woningdelen.nl'}>info@woningdelen.nl</a>
                        </h4>
                        <h4>
                            T:
                            <a href={'tel: +31 6 48164558'}>+31 6 48164558</a> /
                            <a href={'tel: +31 6 48164558'}>+31 6 51366333</a>
                        </h4>
                        <Seperator />
                        <Formik
                            initialValues={{ name: '', email: '', comment: '', tel: '' }}
                            onSubmit={(values, { setSubmitting }) => {
                                fetch('/?no-cache=1', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                    body: encode({
                                        'form-name': 'contact',
                                        ...values,
                                    }),
                                })
                                    .then(() => {
                                        alert('Verstuurd!');
                                        setSubmitting(false);
                                    })
                                    .catch(() => {
                                        alert('Error: Please Try Again!');
                                        setSubmitting(false);
                                    });
                            }}
                        >
                            {({ handleSubmit, handleReset }) => (
                                <form
                                    name="Contact"
                                    onSubmit={handleSubmit}
                                    onReset={handleReset}
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                >
                                    <FormGroup flexDirection={'column'}>
                                        <Input name={'name'} id={'name'} placeholder={'Naam'} />
                                    </FormGroup>
                                    <FormGroup flexDirection={'column'}>
                                        <Input name={'email'} id={'email'} placeholder={'Email'} />
                                    </FormGroup>

                                    <FormGroup flexDirection={'column'}>
                                        <Input name={'tel'} id={'tel'} placeholder={'Telefoon'} />
                                    </FormGroup>
                                    <FormGroup flexDirection={'column'}>
                                        <Input
                                            name={'comment'}
                                            as={'textarea'}
                                            id={'comment'}
                                            placeholder={'Opmerkingen'}
                                        />
                                    </FormGroup>

                                    <Button variant={'accent'} type={'submit'}>
                                        Versturen
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </Block>
                </Container>
            </Page>
            <ContactForm {...cta.menuProps} />
        </IndexLayout>
    );
};

export default OverOns;

const Container = styled(Flex)`
    background: #333333;
`;

const Seperator = styled.hr`
    height: 1px;
    width: 100%;
    background: #99a0aa;
`;

const FormGroup = styled(Flex)`
    :last-of-type {
        margin-bottom: 2rem;
    }
`;

const StyledInput = styled.input`
    max-width: 40rem;
    border: none;
    background: none;
    font-size: 1.6rem;
    position: relative;
    border-bottom: 2px solid;
    padding: 0.8rem 0;
    color: currentColor;
    outline: none;

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 1.4rem;
        border-bottom: 2px solid;
        padding: 0.6rem 0;
    }
`;

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { as?: keyof JSX.IntrinsicElements }> = props => (
    <Field {...props}>
        {({ field }: FieldProps & { as?: keyof JSX.IntrinsicElements }) => <StyledInput {...props} {...field} />}
    </Field>
);
