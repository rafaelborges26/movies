import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  align-items: center;
  height: 60%;
  width: 30%;
  padding: 60px 68px 40px;
  background: #000000bf;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin-left: 130px;
    margin-top: 55px;

    button {
      margin-left: 60px;
    }
  }
`;

export const Title = styled.text`
  display: flex;
  flex: 1;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  align-content: center;
  align-items: center;
  justify-content: start;
`;
