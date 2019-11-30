import styled from 'styled-components';

export const Header = styled.h3`
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
