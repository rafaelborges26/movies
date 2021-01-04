import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { DefaultRootState, useSelector } from 'react-redux';
import { format, parseISO, getDate, getDay } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Container, List, AddMyList } from './styles';
import api from '../../services/themoviedb';
import { clickSearchMovie } from '../../store/modules/movies/actions';
import { IState } from '../../store/index';
import FlatListRulases from '../FlatListRulases';
import { IMovieState } from '../../store/modules/movies/types';

const FlatList: React.FC = () => {
  const movieSearched = useSelector<IState, IMovieState>(state => state.movies);

  const formatedData = useMemo(() => {
    const dateApi = movieSearched.movie.release_date;
    const dateFormated = parseISO(dateApi);

    const day = dateFormated.getDate();
    const month = dateFormated.getMonth() + 1;
    const year = dateFormated.getFullYear();

    const dateAll = new Date(year, month, day);
    // const dateAll = dateApi.replace('-', '/');

    // return result;
    // const testar = format(dateAll, "'dia' dd 'de' MMMM 'de' yyyy", {
    //  locale: ptBR,
    // });

    return dateFormated;
  }, [movieSearched]);

  return (
    <Container>
      <h1>Filme buscado</h1>
      <List>
        <p>
          titulo do filme:
          {movieSearched.movie.title}
        </p>
        <span>
          Avaliação do filme:
          {movieSearched.movie.vote_average}
        </span>
        <span>{movieSearched.movie.release_date}</span>
        <AddMyList>
          <FiPlusCircle size={28} />
          <p>Minha lista</p>
        </AddMyList>
      </List>
    </Container>
  );
};
export default FlatList;
