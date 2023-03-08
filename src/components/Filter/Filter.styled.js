import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 50%;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;

  &:hover,
  :focus {
    border-color: #00bfff;
  }

  // margin-top: 10px;
  // width: 200px;
  // &:focus-visible {
  //   outline-color: blue;
  // }
`;
