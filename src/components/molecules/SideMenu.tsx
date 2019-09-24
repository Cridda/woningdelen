import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import routes from '../../constants/routes';
import { MenuStateProps } from '../../hooks/useMenuState';
import { breakpoints, colors } from '../../styles/variables';

const SideMenu: FC<MenuStateProps> = ({ ...props }) => {
    return (
        <StyledMenu {...props}>
            {routes.map(({ path, name }) => (
                <Link key={path} to={path}>
                    {name}
                </Link>
            ))}
        </StyledMenu>
    );
};

export default SideMenu;

const StyledMenu = styled.nav<Partial<MenuStateProps>>`
    box-shadow: 0 20px 40px 0 rgba(16, 36, 48, 0.06);

    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.accent};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    @media (max-width: ${breakpoints.sm}px) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${colors.gray.dark};
        text-decoration: none;
        transition: color 0.3s linear;
        position: relative;
        @media (max-width: ${breakpoints.sm}px) {
            font-size: 1.5rem;
            text-align: center;
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
            bottom: 1rem;
        }
    }
`;
