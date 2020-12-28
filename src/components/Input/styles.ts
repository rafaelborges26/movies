import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  padding: 15px;
  width: 75%;
  height: 15%;

  display: flex;
  align-items: center;

  color: #f4ede8;

  align-items: center;

  & + div {
    margin-top: 25px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    text-align: initial;
    font-size: 19px;

    &::placeholder {
      color: #666360;
    }
  }
`;
