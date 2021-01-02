import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const List = styled.div`
  margin-top: 3%;
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    font-size: 24px;
    font-weight: 300;
    //margin-bottom: 15px;
  }

  span {
    font-size: 18px;
    margin-top: 20px;
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
