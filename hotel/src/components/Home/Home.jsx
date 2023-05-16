import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="setContainer container">
        <div className="homeText">
          <h1 className="title">Discover The Best Hotels & Resort to Stay</h1>
          <p className="subTitle">
           We provide a variety of the best lodging accommodations for those of
           you who need it. Don't worry about the quality of the service.
          </p>
          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destinaion" />
          </div>

          <div className="distDiv">
            <label htmlFor="check-in">Check-in</label>
            <input type="text" placeholder="date" />
          </div>
          <div className="distDiv">
            <label htmlFor="check-out">Check-Out</label>
            <input type="text" placeholder="date" />
          </div>

          <div className="priceDiv">
            <label htmlFor="Room">Room & Guest</label>
            <input type="text" placeholder="" />
          </div>
          <button className="btn">
            Search
          </button>

        </div>
      </div>
    </section>
  );
};

export default Home;
