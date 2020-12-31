import { url } from 'inspector';
import React, { useCallback, useEffect, useState } from 'react';
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

interface MoviesProps {
  title: string;
  release_date: string;
  vote_average: number;
}

const Movies: React.FC = () => {
  const [movieFound, setMovieFound] = useState<MoviesProps>();
  const [movieSearched, setMovieSearched] = useState('');

  useEffect(() => {
    api
      .get('/trending', {
        params: {
          query: movieSearched,
        },
      })
      .then(response => {
        const movieFiltered = response.data.results[0];
        setMovieFound(movieFiltered);
        console.log(movieFiltered);
      });
  }, [movieSearched]);

  function handlerSearch() {
    setMovieSearched('procurando nemo');
  }

  return (
    <Container>
      <Header>
        <img src={Logomovies} alt="Movies" />

        <SearchMovie>
          <input
            name="searchMovie"
            type="text"
            placeholder="Busque por um filme..."
          />
          <button type="button" onClick={handlerSearch}>
            <FiSearch />
          </button>
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
        {movieFound?.title ? (
          <FlatList>
            <p>{movieFound?.title}</p>
            <span>
              Avaliação do filme:
              {movieFound?.vote_average}
            </span>
            <span>{movieFound?.release_date}</span>
            <AddMyList>
              <FiPlusCircle size={24} />
              <p>Minha lista</p>
            </AddMyList>
          </FlatList>
        ) : (
          <FlatList>
            <p>Filme 1</p>
            <span>Avaliação do filme: 8.5</span>
            <span>20 de dezembro de 2020</span>
            <AddMyList>
              <FiPlusCircle size={24} />
              <p>Minha lista</p>
            </AddMyList>
          </FlatList>
        )}
      </Content>
    </Container>
  );
};

export default Movies;
