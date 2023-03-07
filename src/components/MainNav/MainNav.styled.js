import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNavLink = styled(NavLink)`
  margin: 0 20px;
  text-decoration: none;
  color: black;

  &:hover,
  :focus {
    color: #00bfff;
  }

  &.active {
    color: #00bfff;
  }
`;
