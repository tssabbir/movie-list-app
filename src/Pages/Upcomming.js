import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieFetch } from '../Features/MovieSlice';
import Card from '../Components/Card/Card';

function Upcomming() {
  const {movies,isLoadding,error} = useSelector(state => state.movieList);
  
  const topRatedUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(movieFetch(topRatedUrl))
  },[dispatch])

  return (
    <div>
      {isLoadding && <h4>Lodding...</h4>}
      {error && <h4>{error}</h4>}
      <section className='card-wrap'>
        {movies.results && 
          movies.results.map(movie => <Card key={movie.id} movie={movie}></Card>)
        }
      </section>
    </div>
  )
}

export default Upcomming
