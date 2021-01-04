import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 0 0px 30px;
    width: 8%;
    height: 3%;
  }

  & + svg {
    margin-right: 100px;
  }
`;

export const SearchMovie = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;

  input {
    height: 36px;
    width: 363px;
    padding: 15px;
  }

  button {
    color: white;
    background: #101084;
    border-style: none;
  }

  svg {
    background: #101084;
    height: 32px;
    width: 35px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.3, '#101084')};
    }
  }
`;

export const Out = styled.div`
  display: flex;
  justify-content: center;
  display: block;
  margin-right: 50px;
  align-items: center;

  & + a {
    text-decoration: none;
  }

  svg {
    margin-right: 3px;
  }
`;
export const Nav = styled.div`
  //margin: 0 0 30px 100px;
  display: flex;
  justify-content: space-around;
  background: #101084;

  a {
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    display: block;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fff')};
    }
  }
`;

export const FlatList = styled.div`
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
