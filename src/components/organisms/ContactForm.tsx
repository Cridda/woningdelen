import { Field, FieldProps, Formik } from 'formik';
import { encode } from 'querystring';
import React, { FC, InputHTMLAttributes } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { MenuStateProps } from '../../hooks/useMenuState';
import { breakpoints, colors } from '../../styles/variables';
import Button from '../atoms/Button';
import Close from '../atoms/Close';

type Variant = 'red' | 'yellow';

interface Props extends MenuStateProps {
    variant?: Variant;
    onCloseHandler?: () => void;
}

const ContactForm: FC<Props> = ({ setOpen, open, onCloseHandler, variant = 'yellow', menuRef }) => {
    const props = useSpring({
        // opacity: open ? 1 : 0,
        // visibility: open ? 'visible' : 'hidden',
        transform: open ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(45deg)',
        config: config.gentle,
    });
    // console.log(props);

    return (
        <Formik
            initialValues={{ name: '', email: '', comment: '' }}
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
                        setOpen(false);
                    })
                    .catch(() => {
                        alert('Error: Please Try Again!');
                        setSubmitting(false);
                    });
            }}
        >
            {({ handleSubmit, handleReset }) => (
                <Container variant={variant} ref={menuRef} style={props}>
                    <form
                        style={{ overflow: 'scroll' }}
                        name="contact"
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <FormGroup flexDirection={'column'}>
                            <Label htmlFor={'name'}>naam</Label>
                            <Input name={'name'} id={'name'} placeholder={'Naam'} />
                        </FormGroup>

                        <FormGroup flexDirection={'column'}>
                            <Label htmlFor={'name'}>email</Label>
                            <Input name={'email'} id={'email'} placeholder={'Email'} />
                        </FormGroup>

                        <FormGroup flexDirection={'column'}>
                            <Label htmlFor={'name'}>Opmerkingen</Label>
                            <Input name={'comment'} as={'textarea'} id={'comment'} placeholder={'Opmerkingen'} />
                        </FormGroup>

                        <Button type={'submit'}>Versturen</Button>
                    </form>
                    <CloseButton
                        onClick={() => {
                            if (onCloseHandler) {
                                onCloseHandler();
                            }
                            setOpen(false);
                        }}
                    >
                        <Close />
                    </CloseButton>
                </Container>
            )}
        </Formik>
    );
};

export default ContactForm;

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
    color: ${({ variant }) => (variant === 'yellow' ? '#222222' : colors.white)};
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
