import React, { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Container, List, AddMyList } from './styles';
import api from '../../services/themoviedb';

const FlatListRulases: React.FC = () => {
  const [moviesRulases, setMoviesRulases] = useState([]);

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

  return (
    <Container>
      <List>
        <p>Filme 1</p>
        <AddMyList>
          <FiPlusCircle size={24} />
          <p>Minha lista</p>
        </AddMyList>
      </List>
    </Container>
  );
};

export default FlatListRulases;
