import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin: 0 0 50px 0;
`;

export const LoginLabel = styled.label`
  display: block;
  margin-top: 10px;
  color: grey;
`;

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;

  &:hover,
  :focus {
    border-color: #00bfff;
  }
`;

export const LoginBtn = styled.button`
  display: block;
  width: 100%;
  margin: 20px auto 0;
  padding: 10px;

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
