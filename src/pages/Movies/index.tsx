import { url } from 'inspector';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiSearch, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/themoviedb';
// import FlatListRulases from '../../components/FlatListRulases';
import FlatList from '../../components/FlatList';

import Logomovies from '../../assets/movies.svg';
import { Container, Header, SearchMovie, Out, Nav, Content } from './styles';
import { clickSearchMovie } from '../../store/modules/movies/actions';
import FlatListRulases from '../../components/FlatListRulases';

interface MovieProps {
  title: string;
}

const Movies: React.FC = () => {
  const dispatch = useDispatch();

  const [movieTyped, setMovieTyped] = useState('');
  const [movieSearched, setMovieSearched] = useState('');

  // function handlerSearch() {
  //  // setMovieSearched(movieTyped);
  //  dispatch(clickSearchMovie(movieTyped));
  // }

  function handlerRulases() {
    setMovieSearched('');
  }

  function handleSearch() {
    dispatch(clickSearchMovie(movieTyped));
    console.log(movieTyped, 'movietuped');
  }

  return (
    <Container>
      <Header>
        <img src={Logomovies} alt="Movies" />

        <SearchMovie>
          <input
            name="searchMovie"
            onChange={event => setMovieTyped(event.target.value)}
            type="text"
            placeholder="Busque por um filme..."
          />
          <button
            type="button"
            onClick={() => {
              handleSearch();
            }}
          >
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
        <Link
          to="/"
          onClick={() => {
            handlerRulases();
          }}
        >
          Lançamentos
        </Link>
        <Link to="/">Minha lista</Link>
      </Nav>
      <FlatList />
      <Content>
        <h1>Lançamentos</h1>
      </Content>
    </Container>
  );
};

export default Movies;
