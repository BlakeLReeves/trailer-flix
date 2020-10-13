import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import requests from "../Api/requests";
import Banner from "./Banner";
import Nav from "./Nav";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <MovieRow title="Trending" dataUrl={requests.fetchTrending} isPoster />
      <MovieRow title="Top Rated" dataUrl={requests.fetchTopRated} />
      <MovieRow title="Now Playing" dataUrl={requests.fetchNowPlaying} />
      <MovieRow title="Upcoming" dataUrl={requests.fetchUpcoming} />
      <MovieRow title="Action" dataUrl={requests.fetchAction} />
      <MovieRow title="Adventure" dataUrl={requests.fetchAdventure} />
      <MovieRow title="Fantasy" dataUrl={requests.fetchFantasy} />
      <MovieRow
        title="Science Fiction"
        dataUrl={requests.fetchScienceFiction}
      />
    </div>
  );
}
