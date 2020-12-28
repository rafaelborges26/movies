import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  containerStyle?: object;
}

const Input: React.FC<InputProps> = ({ type }) => (
  <Container>
    <input type={type} />
  </Container>
);
export default Input;
