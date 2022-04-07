import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./Detail.scss";

export default function App(props) {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  const getAnime = async () => {
    try {
      const response = await fetch(
        `https://ghibliapi.herokuapp.com/films/${id}`
      );
      const res = JSON.parse(await response.text());
      setAnime(res);
      props.SetPageLoading();
      // console.log(res)
    } catch (err) {
      props.SetPageLoading();
      console.log("Error", err);
    }
  };
  useEffect(() => {
    getAnime();
    props.SetPageLoading();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="detail-page">
        <div className="detail-img">
          <Zoom>
            <img src={anime.image} alt="" />
          </Zoom>
        </div>
        <div className="detail-div">
          <span id="title">
            <b>Title:-</b> {anime?.title}
          </span>
          <span id="original_title">
            <b>Original Title:- </b>
            {anime?.original_title}
          </span>
          <span id="original_title_romanised">
            <b> Original Title Romanised:- </b>
            {anime?.original_title_romanised}
          </span>
          <span id="director">
            <b> Director:- </b>
            {anime?.director}
          </span>
          <span id="director">
            <b> Producer:- </b>
            {anime?.producer}
          </span>
          <span id="release_date">
            <b> Release Date:- </b>
            {anime?.release_date}
          </span>
          <span id="running_time">
            <b> Running Time:- </b>
            {anime?.running_time}
          </span>
          <span id="rt_score">
            <b> RT Score:- </b>
            {anime?.rt_score}
          </span>
          <span id="description">
            <b> Description:- </b>
            {anime?.description}
          </span>
        </div>
      </div>
      <div className="banner">
        <Zoom>
          <img src={anime?.movie_banner} alt="" />
        </Zoom>
      </div>
      <div
        style={{
          height: "70vh",
        }}
      ></div>
    </>
  );
}
