import React, { useCallback, useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { DefaultRootState, useSelector } from 'react-redux';
import { Container, List, AddMyList } from './styles';
import api from '../../services/themoviedb';
import { clickSearchMovie } from '../../store/modules/movies/actions';
import { IState } from '../../store/index';
import FlatListRulases from '../FlatListRulases';

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

const FlatList: React.FC = () => {
  const [movieFound, setMovieFound] = useState<MoviesProps>();
  const [movieSearched, setMovieSearched] = useState('');
  // const [movieTitle, setMovieTitle] = useState<IMovie>();

  const movieTitleSearched = useSelector<IState, string>(
    state => state.movies.movie,
  );
  // console.log(movieTitleSearched);
  if (movieTitleSearched) setMovieSearched(movieTitleSearched);

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
      });
  }, [movieSearched]);

  return (
    <Container>
      {movieFound && (
        <List>
          <p>{movieFound.title}</p>
          <span>
            Avaliação do filme:
            {movieFound.vote_average}
          </span>
          <span>{movieFound.vote_average}</span>
          <AddMyList>
            <FiPlusCircle size={28} />
            <p>Minha lista</p>
          </AddMyList>
        </List>
      )}
      ;
    </Container>
  );
};
export default FlatList;
