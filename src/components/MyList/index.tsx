import React, { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Container, List, AddMyList } from './styles';
import api from '../../services/themoviedb';

const MyList: React.FC = () => {
  // useEffect(() => {
  //  api.get('/trending').then(response => {
  //    const moviesTrending = response.data.results;
  //    setMoviesRulases(moviesTrending);
  //    console.log(moviesRulases);
  //  });
  // }, []);

  function handlerRulases() {
    // setMovieSearched(''); // setar no reducer
    console.log('funcao ativa');
  }

  // const handlerMyList = useCallback(() => {
  //   if (movieSearched) setMyListMovies([...myListMovies, movieSearched]);
  //
  //   console.log(myListMovies);
  //   dispatch(clickMyList());
  // }, [movieSearched]);

  return (
    <Container>
      <List>
        <h1>Minha lista</h1>

        <AddMyList>
          <FiPlusCircle size={24} />
          <p>Minha lista</p>
        </AddMyList>
      </List>
    </Container>
  );
};

export default MyList;
