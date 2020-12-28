import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #101084;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 200px;
  align-content: center;
  margin-top: 35px;
  color: #312000;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#101084')};
  }
`;
