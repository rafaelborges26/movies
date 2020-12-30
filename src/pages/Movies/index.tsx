import { url } from 'inspector';
import React, { useEffect } from 'react';
import { FiSearch, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/themoviedb';
import Logomovies from '../../assets/movies.svg';
import {
  Container,
  Header,
  SearchMovie,
  Out,
  Nav,
  Content,
  FlatList,
  AddMyList,
} from './styles';

const Movies: React.FC = () => {
  // useEffect(() => {
  //  api
  //    .get('/trending', {
  //      params: {
  //        query: 'house',
  //      },
  //    })
  //    .then(response => {
  //      const movieFiltered = response.data;
  //    });
  // }, []);

  return (
    <Container>
      <Header>
        <img src={Logomovies} alt="Movies" />

        <SearchMovie>
          <input placeholder="Busque por um filme..." />
          <Link to="/">
            <FiSearch />
          </Link>
        </SearchMovie>

        <Out>
          <Link to="/">
            <FiLogOut />
            <p>Sair</p>
          </Link>
        </Out>
      </Header>
      <Nav>
        <Link to="/">Lançamentos</Link>
        <Link to="/">Minha lista</Link>
      </Nav>

      <Content>
        <h1>Lançamentos</h1>
        <FlatList>
          <p>Filme 1</p>
          <span>Avaliação do filme: 8.5</span>
          <span>20 de dezembro de 2020</span>
          <AddMyList>
            <FiPlusCircle size={24} />
            <p>Minha lista</p>
          </AddMyList>
        </FlatList>
        <FlatList>
          <p>Filme 1</p>
          <span>Avaliação do filme: 8.5</span>
          <span>20 de dezembro de 2020</span>
          <AddMyList>
            <FiPlusCircle size={24} />
            <p>Minha lista</p>
          </AddMyList>
        </FlatList>
      </Content>
    </Container>
  );
};

export default Movies;
