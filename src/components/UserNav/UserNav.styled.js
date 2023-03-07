import styled from 'styled-components';
import { TbLogout } from 'react-icons/tb';

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;

  margin-left: 10px;
  padding: 5px 10px;

  cursor: pointer;

  color: #00bfff;
  background-color: #f8f8ff;

  border: 1px solid #00bfff;
  border-radius: 5px;

  &:hover,
  :focus {
    color: #f8f8ff;
    background-color: #00bfff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const LogOutIcon = styled(TbLogout)`
  margin-left: 5px;
`;
