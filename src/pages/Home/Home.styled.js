import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;
export const HomeTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  text-align: center;
  line-height: 1.5;
`;

export const HomeAccent = styled.span`
  color: #00bfff;
`;

export const HomeNavigate = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const HomeLink = styled(Link)`
  width: 160px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

  text-decoration: none;
  text-align: center;

  background-color: #00bfff;
  color: #f0ffff;

  border: 1px solid #00bfff;
  border-radius: 5px;

  &:hover,
  :focus {
    background-color: #188ce8;
    border-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const HomeLinkRegister = styled(HomeLink)`
  color: #00bfff;
  background-color: #f8f8ff;

  &:hover,
  :focus {
    color: #f0ffff;
  }
`;

export const HomeDivider = styled.div`
  width: 0px;
  margin: 0 20px;
  border-right: 1px solid #00bfff;
  // border-right: 1px solid #000000;
`;

export const HomeLinkAddContact = styled(HomeLink)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
