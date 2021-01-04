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
import MyList from '../../components/MyList';

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
  const [myList, setMyList] = useState();

  // const [visibleMyList, setVisibleMyList] = useState(false);
  // const [visibleSearch, setVisibleSearch] = useState(false);
  // const [visibleRulases, setVisibleRulases] = useState(false);

  function handlerRulases() {
    // setMovieSearched();
  }

  function handleSearch() {
    setMovieFound(movieTyped);
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

  const handlerMyList = useCallback(() => {
    console.log(movieSearched); // sera movie clicado
    // dispatch(clickMyList()); enviar filme clicado
  }, []);

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
              // setMyList();

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
        <button
          type="button"
          onClick={() => {
            handlerRulases();
          }}
        >
          Lançamentos
        </button>
        <button type="button" onClick={handlerMyList}>
          Minha lista
        </button>
      </Nav>
      <FlatList />
    </Container>
  );
};

export default Movies;
