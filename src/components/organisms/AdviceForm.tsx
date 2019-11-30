import { Field, FieldProps, Formik } from 'formik';
import { encode } from 'querystring';
import React, { FC, InputHTMLAttributes, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Box, Flex } from 'reflexbox';
import styled from 'styled-components';
import { MenuStateProps } from '../../hooks/useMenuState';
import { breakpoints, colors } from '../../styles/variables';
import Button from '../atoms/Button';
import Close from '../atoms/Close';
import { Header } from '../atoms/Header';

type Variant = 'red' | 'yellow';

interface Props extends MenuStateProps {
    variant?: Variant;
    onCloseHandler?: () => void;
}
const Display = styled(Box)<{ shouldDisplay: boolean }>`
    display: ${({ shouldDisplay }) => (shouldDisplay ? 'block' : 'none')};
`;

const getPageContent = (
    page: number,
    { city, currentSituation, email, idealSituation, name, street, tel, zipcode }: AdviceValues
): boolean => {
    switch (page) {
        case 0:
            return false;
        case 1:
            return !currentSituation;
        case 2:
            return !idealSituation;
        case 3:
            return !street || !zipcode || !city;
        case 4:
            return !name || !email || !tel;
        case 5:
            return false;
        case 6:
            return false;
        default:
            return false;
    }
};

interface AdviceValues {
    currentSituation: string;
    idealSituation: string;
    street: string;
    zipcode: string;
    city: string;
    name: string;
    company: string;
    email: string;
    tel: string;
    comment: string;
}

const AdviceForm: FC<Props> = ({ setOpen, open, onCloseHandler, variant = 'yellow', menuRef }) => {
    const props = useSpring({
        // opacity: open ? 1 : 0,
        // visibility: open ? 'visible' : 'hidden',
        transform: open ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(45deg)',
        config: config.gentle,
    });
    // console.log(props);

    const [page, setPage] = useState(0);

    return (
        <Formik
            initialValues={{
                street: '',
                zipcode: '',
                city: '',
                // idealSituation: '',
                // street: '',
                // zipcode: '',
                // city: '',
                // name: '',
                // company: '',
                // email: '',
                // tel: '',
                // comment: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                fetch('/?no-cache=1', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({
                        'form-name': 'advies',
                        ...values,
                    }),
                })
                    .then(() => {
                        setSubmitting(false);
                        setPage(6);
                    })
                    .catch(() => {
                        alert('Error: Please Try Again!');
                        setSubmitting(false);
                        setPage(0);
                    });
            }}
        >
            {({ handleSubmit, handleReset, dirty, values, submitForm }) => {
                // const shouldBeDisabled = getPageContent(page, values);

                return (
                    <Container variant={variant} ref={menuRef} style={props}>
                        <form
                            style={{ overflow: 'scroll', padding: '2px' }}
                            name="Advies"
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            {/* <Display shouldDisplay={page === 0}>
                                <h1>Check uw mogelijkheden</h1>
                            </Display> */}
                            <Display shouldDisplay={true}>
                                {/* <FormGroup flexDirection={'column'}>
                                    <Header>Huidige situatie</Header>
                                    <Label as={'h4'}>Wat is de huidige situatie van het pand?</Label>
                                    <fieldset>
                                        <Field
                                            name={'currentSituation'}
                                            id={'Geen huurder'}
                                            component={RadioButton}
                                            label={'Geen huurder'}
                                        />
                                        <Field
                                            name={'currentSituation'}
                                            id={'1-2 huurders'}
                                            component={RadioButton}
                                            label={'1-2 huurders'}
                                        />
                                        <Field
                                            name={'currentSituation'}
                                            id={'3+ huurders'}
                                            component={RadioButton}
                                            label={'3+ huurders'}
                                        />
                                    </fieldset>
                                </FormGroup> */}
                                <Header>Algemene informatie</Header>
                                <Label as={'h4'}>
                                    Aan de hand van deze gegevens bekijken wij de mogelijkheden omtrent woningdelen
                                </Label>
                                <br />
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'street'} id={'street'} placeholder={'Straatnaam + huisnr.'} />
                                </FormGroup>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'zipcode'} id={'zipcode'} placeholder={'Postcode'} />
                                </FormGroup>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'city'} id={'city'} placeholder={'Plaats'} />
                                </FormGroup>
                                <Button type={'submit'} />
                            </Display>
                            {/* <Display shouldDisplay={page === 2}>
                                <FormGroup flexDirection={'column'}>
                                    <Header>Gewenste situatie</Header>
                                    <Label as={'h4'}>Aan hoeveel personen wilt u uw huis verhuren?</Label>
                                    <fieldset>
                                        <Field
                                            name={'idealSituation'}
                                            id={'3 woningdelers'}
                                            component={RadioButton}
                                            label={'3 woningdelers'}
                                        />
                                        <Field
                                            name={'idealSituation'}
                                            id={'4 woningdelers'}
                                            component={RadioButton}
                                            label={'4 woningdelers'}
                                        />
                                        <Field
                                            name={'idealSituation'}
                                            id={'5+ woningdelers'}
                                            component={RadioButton}
                                            label={'5+ woningdelers'}
                                        />
                                    </fieldset>
                                </FormGroup>
                            </Display>

                            <Display shouldDisplay={page === 3}>
                                <Header>Algemene informatie</Header>
                                <Label as={'h4'}>
                                    Aan de hand van deze gegevens bekijken wij de mogelijkheden omtrent woningdelen
                                </Label>
                                <br />
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'street'} id={'street'} placeholder={'Straatnaam + huisnr.'} />
                                </FormGroup>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'zipcode'} id={'zipcode'} placeholder={'Postcode'} />
                                </FormGroup>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'city'} id={'city'} placeholder={'Plaats'} />
                                </FormGroup>
                            </Display>

                            <Display shouldDisplay={page === 4}>
                                <Header>Contact gegevens</Header>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'name'} id={'name'} placeholder={'Naam'} />
                                </FormGroup>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'company'} id={'company'} placeholder={'Bedrijf (optioneel)'} />
                                </FormGroup>

                                <FormGroup flexDirection={'column'}>
                                    <Input type={'email'} name={'email'} id={'email'} placeholder={'Email'} />
                                </FormGroup>

                                <FormGroup flexDirection={'column'}>
                                    <Input name={'tel'} id={'tel'} placeholder={'Telefoon'} />
                                </FormGroup>
                            </Display>

                            <Display shouldDisplay={page === 5}>
                                <Header>Nog vragen / opmerkingen?</Header>
                                <FormGroup flexDirection={'column'}>
                                    <Input name={'comment'} as={'textarea'} id={'comment'} placeholder={'Tekst'} />
                                </FormGroup>
                            </Display>

                            <Display shouldDisplay={page === 6}>
                                <h1>Bedankt voor uw verzoek. U hoort spoedig van ons!</h1>
                                Liever telefonisch contact? wij staan altijd voor u klaar!
                                <h4>
                                    <a href={'tel: +31 6 48164558'}>+31 6 48164558</a> /
                                    <a href={'tel: +31 6 48164558'}>+31 6 51366333</a>
                                </h4>
                            </Display> */}
                            {/* <Actions>
                                {page !== 0 && page !== 6 && (
                                    <TextButton onClick={() => setPage(page - 1)}>vorige</TextButton>
                                )}
                                <Button
                                    variant={'accent'}
                                    type={'button'}
                                    onClick={() => {
                                        if (page === 5) {
                                            submitForm();
                                        } else if (page === 6) {
                                            setOpen(false);
                                        } else {
                                            setPage(page + 1);
                                        }
                                    }}
                                    disabled={shouldBeDisabled}
                                >
                                    {page === 5 ? (
                                        'Versturen'
                                    ) : page === 6 ? (
                                        'Sluiten'
                                    ) : (
                                        <Arrow style={{ marginLeft: 'auto' }} />
                                    )}
                                </Button>
                            </Actions> */}
                        </form>
                        <CloseButton
                            onClick={() => {
                                if (
                                    dirty &&
                                    !window.confirm('Weet u zeker dat u het formulier wilt verlaten?') &&
                                    page !== 6
                                ) {
                                    return;
                                }
                                if (onCloseHandler) {
                                    onCloseHandler();
                                }
                                setOpen(false);
                            }}
                        >
                            <Close />
                        </CloseButton>
                    </Container>
                );
            }}
        </Formik>
    );
};

export default AdviceForm;

const Actions = styled.div`
    @media (min-width: ${breakpoints.lg}px) {
        position: absolute;
        right: 12rem;
        max-width: 7rem;
    }

    bottom: 5rem;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    > * + * {
        margin-left: 1rem;
    }
`;

interface RadioButtonProps extends FieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
    label: string;
}

// Radio input
const RadioButton: FC<RadioButtonProps> = ({ field: { name, value, onChange, onBlur }, form, id, label, ...props }) => {
    return (
        <Flex alignItems={'center'}>
            <label>
                <input
                    style={{ marginRight: '0.6rem' }}
                    name={name}
                    id={id}
                    type="radio"
                    value={id} // could be something else for output?
                    checked={id === value}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...props}
                />
                {label}
            </label>
        </Flex>
    );
};

const Label = styled.label``;
const FormGroup = styled(Flex)`
    :last-of-type {
        margin-bottom: 2rem;
    }
`;

const CloseButton = styled.button`
    border: none;
    position: absolute;
    right: 2rem;
    top: 2rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    :hover {
        > svg {
            transition: all 200ms;
            transform: rotate(90deg);
        }
    }
`;
const StyledInput = styled.input`
    max-width: 40rem;
    border: none;
    background: none;
    font-size: 2rem;
    position: relative;
    border-bottom: 4px solid;
    padding: 1rem 0;
    color: currentColor;
    outline: none;
`;

const Input: FC<InputHTMLAttributes<HTMLInputElement> & { as?: keyof JSX.IntrinsicElements }> = props => (
    <Field {...props}>
        {({ field }: FieldProps & { as?: keyof JSX.IntrinsicElements }) => <StyledInput {...props} {...field} />}
    </Field>
);
const Container = styled(animated.div)<Partial<Props>>`
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    position: fixed;
    z-index: 100;
    color: ${({ variant }) => (variant === 'yellow' ? colors.dark : colors.white)};
    background: ${({ variant }) => (variant === 'yellow' ? colors.cta : colors.accent)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 10rem;
    @media (max-width: ${breakpoints.lg}px) {
        padding: 1rem 2rem;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
    }

    width: 80vw;
    height: 80vh;
    top: 10vh;
    left: 10vw;

    ${FormGroup} + ${FormGroup} {
        margin-top: 3rem;
    }
`;
