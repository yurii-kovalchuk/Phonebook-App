import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNavLink = styled(NavLink)`
  margin: 0 20px;
  text-decoration: none;
  color: black;

  &:hover,
  :focus {
    text-shadow: #00bfff 1px 0 10px;
  }

  &:active {
    text-shadow: yellow 1px 0 10px;
  }
`;
