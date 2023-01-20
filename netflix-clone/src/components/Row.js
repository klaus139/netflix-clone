import React, { useState, useEffect } from "react";
import axios from "../axios"; //you can actually change the name of a default import just like i did here.
import './row.css';
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code that makes a request on an api to TMDB
  useEffect(() => {
    //if the bracket is blank it means run once when the row loads and dont run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie?.name}
          />
          

        ))}
      </div>
    </div>
  );
}

export default Row;
