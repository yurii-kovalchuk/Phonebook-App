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
`;

export const HomeAccent = styled.span`
  color: #00bfff;
`;

export const HomeNavigate = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-basis: 45%;
`;

export const HomeLink = styled(Link)`
  width: 45%;
`;

export const HomeLoginBtn = styled.button`
  display: block;
  width: 100%;
  margin: 20px auto 0;
  padding: 10px;

  cursor: pointer;

  background-color: #00bfff;
  color: #f0ffff;

  border: transparent;
  border-radius: 5px;

  &:hover,
  :focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const HomeRegisterBtn = styled.button`
  display: block;
  width: 100%;
  margin: 20px auto 0;
  padding: 10px;

  cursor: pointer;

  color: #00bfff;
  background-color: #f8f8ff;

  border: 1px solid #00bfff;
  border-radius: 5px;

  &:hover,
  :focus {
    color: #f0ffff;
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
