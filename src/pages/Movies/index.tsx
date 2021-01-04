import { url } from 'inspector';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiSearch, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/themoviedb';
// import FlatListRulases from '../../components/FlatListRulases';
import FlatList from '../../components/FlatList';

import Logomovies from '../../assets/movies.svg';
import { Container, Header, SearchMovie, Out, Nav } from './styles';
import { clickSearchMovie } from '../../store/modules/movies/actions';
import FlatListRulases from '../../components/FlatListRulases';

interface MoviesProps {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: [];
  id: number;
  media_type?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: string;
}

interface IMovie {
  movies: { movie: string };
}

const Movies: React.FC = () => {
  const dispatch = useDispatch();

  // const [movieSearched, setMovieSearched] = useState('');
  // const [movieTitle, setMovieTitle] = useState<IMovie>();

  // function handlerSearch() {
  // // setMovieSearched(movieTyped);
  // dispatch(clickSearchMovie(movieTyped));
  // }

  const [movieFound, setMovieFound] = useState('');
  const [movieTyped, setMovieTyped] = useState('');
  const [movieSearched, setMovieSearched] = useState<MoviesProps>();

  function handlerRulases() {
    // setMovieSearched();
  }

  function handleSearch() {
    setMovieFound(movieTyped);

    console.log(movieSearched);
  }

  useEffect(() => {
    api
      .get('/trending', {
        params: {
          query: movieTyped,
        },
      })
      .then(response => {
        const movieFiltered = response.data.results[0];
        setMovieSearched(movieFiltered);
        dispatch(clickSearchMovie(movieFiltered)); // enviar para os flats
      });
  }, [movieFound]);

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
    </Container>
  );
};

export default Movies;
