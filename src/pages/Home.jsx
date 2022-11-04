import React from 'react'
import useFetch from '../hooks/useFetch'



const Home = () => {

    const newPeliculas= useFetch("https://api.themoviedb.org/3/movie/550?api_key=06d31e2637344994584514ea6e9eae50&language=en=ES")

    console.log(newPeliculas); //minuto 1:05:58


  return (
    <div>Home</div>
  )
}

export default Home