import React, { useState, useEffect } from "react";
import axios from "../Api/axios";
import "./MovieRow.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const img_base_url = "https://image.tmdb.org/t/p/original/";

export default function MovieRow({ title, dataUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(dataUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchMovies();
  }, [dataUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (videoId) {
      setVideoId("");
    } else {
      console.log(movie);
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setVideoId(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <h2 className="movies-title">{title}</h2>

      <div className="movie-rows">
        {movies.map((movie) => {
          return (
            <img
              className={`movie ${isPoster && "movie-isPoster"}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${img_base_url}${
                isPoster ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.title || movie?.name || movie?.original_name}
            />
          );
        })}
      </div>
      {videoId && <Youtube videoId={videoId} opts={opts} />}
    </div>
  );
}
