import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  containerStyle?: object;
}

const Input: React.FC<InputProps> = ({ defaultValue, type, ...rest }) => (
  <Container>
    <input type={type} {...rest} defaultValue={defaultValue} />
  </Container>
);
export default Input;
