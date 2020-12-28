import React from 'react';
import { Container, Content, Title } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>Entrar</Title>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="button">Entrar</Button>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
