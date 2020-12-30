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
    height: 32px;
    width: 363px;
    padding: 15px;
  }

  a {
    color: white;
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
  //color: #9932cc; colocar cor black
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

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  //justify-content: space-between;
  //justify-content: space-between;
  align-items: initial;
  margin: 3% 0 0 20%;
`;

export const FlatList = styled.div`
  margin-top: 3%;
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    font-size: 22px;
    font-weight: 300;
  }

  span {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const AddMyList = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  align-items: center;
  margin-top: 10px;

  > svg {
    margin-right: 3px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }
`;
