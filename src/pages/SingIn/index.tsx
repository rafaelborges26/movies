import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { sign } from 'crypto';
import { Container, Content, Title } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/AuthContext';

interface signInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [data, setData] = useState<signInFormData>({
    email: 'exemplo@gmail.com',
    password: '123456',
  });

  const history = useHistory();

  const handleSubmit = useCallback(() => {
    // valores para fazer o login: exemplo@gmail.com - 123456
    console.log(data.email);
    if (data.email === 'exemplo@gmail.com' && data.password === '123456') {
      signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/movies');
    }
  }, [history]);

  return (
    <>
      <Container>
        <Content>
          <Title>Entrar</Title>

          <Form onSubmit={handleSubmit}>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
