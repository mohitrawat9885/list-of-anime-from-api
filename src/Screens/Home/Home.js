import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Header from "../Header/Header";

export default function App(props) {
  const [animeList, setAnimeList] = useState([]);

  const getAnimes = async () => {
    try {
      const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
      const res = JSON.parse(await response.text());
      setAnimeList(res);
      props.SetPageLoading();
      // console.log(res)
    } catch (err) {
      props.SetPageLoading();
      console.log("Error", err);
    }
  };
  useEffect(() => {
    getAnimes();
    props.SetPageLoading();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="anime-page">
        <div className="anime-container">
          {animeList.map((anime, index) => (
            <div className="anime-div ">
              <Link to={`/detail/${anime.id}`} key={index}>
                <div className="anime-img img-wrapper">
                  <img className="hover-zoom" src={anime.image} />
                </div>
                <div className="anime-detail">
                  <p>
                    <b>{anime.title}</b>
                  </p>
                  <p>{anime.original_title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
