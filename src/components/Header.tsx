import { RouteComponentProps } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import routes from '../constants/routes';
import useMenuState from '../hooks/useMenuState';
import { breakpoints, colors, dimensions } from '../styles/variables';
import logo from './../img/logo.png';
import Burger from './atoms/Burger';
import SideMenu from './molecules/SideMenu';

interface HeaderProps extends RouteComponentProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ location }) => {
    const { menuProps, setOpen, open } = useMenuState();
    const [pinned, setPinned] = React.useState(false);
    return (
        <Headroom onUnpin={() => setPinned(true)} onPin={() => setPinned(false)}>
            <StyledHeader>
                <HamburgerMenu ref={menuProps.menuRef}>
                    <Burger onClick={() => setOpen(!open)} open={open} />
                    <SideMenu {...menuProps} />
                </HamburgerMenu>
                <HeaderInner>
                    <Link to={'/'}>
                        <Logo pinned={pinned} animate />
                    </Link>

                    {routes.map(({ path, name }) => (
                        <StyledLink
                            activeClassName={'active'}
                            activeStyle={{ fontWeight: 700 }}
                            key={path}
                            to={path}
                            state={
                                name === 'Contact' && location && location.pathname
                                    ? { prevPath: location.pathname }
                                    : undefined
                            }
                        >
                            {name}
                        </StyledLink>
                    ))}
                </HeaderInner>
            </StyledHeader>
        </Headroom>
    );
};

export default Header;

const Logo = styled.div<{ animate?: boolean; pinned: boolean }>`
    background: url(${logo}) no-repeat;
    height: 6rem;
    width: 6rem;
    z-index: 3;
    position: absolute;
    left: 5rem;
    top: 0.5rem;
    background-size: cover;

    transition: all 200ms;
    box-shadow: ${({ pinned }) => (pinned ? '0 20px 40px 0 rgba(16, 36, 48, 0.06)' : 'none')};
    @media (min-width: ${breakpoints.sm}px) {
        background-size: contain;
        left: 4rem;
        height: 10rem;
        width: 8rem;
    }

    @media (min-width: ${breakpoints.md}px) {
        left: -10rem;
        height: 8rem;
        background-size: cover;
    }

    @media (min-width: ${breakpoints.lg}px) {
        top: ${({ pinned }) => (pinned ? '1.5rem' : 0)};
        ${({ animate }) => animate && 'animation: flyin 1s forwards 1s;'}
        margin-left: 0;
        left: -15rem;
        width: 14rem;
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

    @media (max-width: ${breakpoints.sm}px) {
        height: 7rem;
    }
`;

const StyledLink = styled(Link)`
    color: darkslategray;
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    padding: 2rem 0;

    .active {
        ::after {
            opacity: 1 !important;
        }
    }

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
