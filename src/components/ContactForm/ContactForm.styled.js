import styled from 'styled-components';
import { RiAddCircleFill } from 'react-icons/ri';
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
  padding: 30px 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const LabelsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin: 0 10px 30px;
  font-weight: 500;
  text-align: start;
`;

export const Input = styled(Field)`
  display: block;
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
`;

export const Btn = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 160px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;

  text-decoration: none;
  text-align: center;

  color: #00bfff;
  background-color: #f8f8ff;

  border: 1px solid #00bfff;
  border-radius: 5px;

  &:hover,
  :focus {
    background-color: #188ce8;
    color: #f0ffff;
    border-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const BtnIcon = styled(RiAddCircleFill)`
  // margin-left: 10px;
`;
