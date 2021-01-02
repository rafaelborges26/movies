import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const List = styled.div`
  p {
    font-size: 24px;
    font-weight: 300;
  }
`;

export const AddMyList = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  align-items: center;
  margin-top: 25px;
  color: #ffe000;

  > svg {
    margin-right: 5px;
  }

  p {
    font-size: 22px;
    font-weight: 600;
  }
`;
