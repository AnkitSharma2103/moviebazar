import React, { useEffect } from "react";
// import Footer from "../common/footer";
// import Header from "./common/header";
import Header from "../common/header";
import Footer from "../common/footer";

import "./HomePage.css";
import ActionAreaCard from "../cards/card";
import axios from "axios";

const HomePage = () => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "d5ad957900mshefb4de5804625e6p17f2efjsncd6efafc3878",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com"
    }
  };
  async function getMovieData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <Header />
      <h1>This is the HomePage</h1>
      <img
        src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"
        alt="img"
        style={{ height: "150px", width: "100vw" }}
      />
      <ActionAreaCard />
      <Footer />
    </div>
  );
};

export default HomePage;
