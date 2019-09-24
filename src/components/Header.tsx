import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import routes from '../constants/routes';
import useMenuState from '../hooks/useMenuState';
import { breakpoints, colors, dimensions } from '../styles/variables';
import logo from './../img/logo.png';
import Burger from './atoms/Burger';
import SideMenu from './molecules/SideMenu';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = () => {
    const { menuProps, setOpen, open } = useMenuState();

    return (
        <StyledHeader>
            <HamburgerMenu ref={menuProps.menuRef}>
                <Burger onClick={() => setOpen(!open)} open={open} />
                <SideMenu {...menuProps} />
            </HamburgerMenu>
            <HeaderInner>
                <Logo />

                {routes.map(({ path, name }) => (
                    <StyledLink key={path} to={path}>
                        {name}
                    </StyledLink>
                ))}
            </HeaderInner>
        </StyledHeader>
    );
};

export default Header;

const Logo = styled.div`
    background: url(${logo}) no-repeat;
    background-size: cover;
    height: 8rem;
    width: 14rem;
    top: 0;
    position: absolute;
    @media (min-width: ${breakpoints.md}px) {
        left: -10rem;
    }

    @media (min-width: ${breakpoints.lg}px) {
        animation: flyin 1s forwards 1s;
        margin-left: 0;
        left: -15rem;
    }

    @keyframes flyin {
        from {
            height: 8rem;
        }
        to {
            height: 17rem;
        }
    }
`;

const HamburgerMenu = styled.div`
    display: none;
    @media (max-width: ${breakpoints.md}px) {
        display: block;
    }
    align-items: center;
`;

const StyledHeader = styled.header`
    height: 8.5rem;
    padding: 0 ${dimensions.containerPadding}rem;
    background-color: ${colors.white};
    color: ${colors.black};
    display: flex;
`;

const StyledLink = styled(Link)`
    color: darkslategray;
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    padding: 2rem 0;
    &:hover,
    &:focus {
        text-decoration: none;
        ::after {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    ::after {
        transition: all 200ms;
        opacity: 0;
        content: '';
        background: currentColor;
        height: 3px;
        width: 100%;
        transform: scaleX(0);
        position: absolute;
        left: 0;
        bottom: 2rem;
    }

    @media (max-width: ${breakpoints.md}px) {
        display: none;
    }
`;

const HeaderInner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    max-width: 100rem;
    margin: auto;
    position: relative;

    > ${StyledLink} + ${StyledLink} {
        margin-left: 3rem;

        @media (max-width: ${breakpoints.lg}px) {
            margin-left: 1.5rem;
        }
    }
`;
