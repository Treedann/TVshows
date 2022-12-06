import React from "react";
import Pa from "./patrick-rating.jpg";
import Pa2 from "./patrick-rating-3stars.jpg";
import Pa3 from "./patrick-rating-4stars.jpg";
import { Routes, Route, Link } from "react-router-dom";
const more = () => {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
};
const TVshows = () => {
  return (
    <div className="tv-shows">
      <div className="tv-shows-content">
        <h2 className="tv-shows-title">TV Shows Database</h2>
        <div className="tv-shows-filters">
          <h3>Current Status</h3>
          <div className="filters-list">
            <div>On going</div>
            <div>Dead</div>
            <div>Pause</div>
            <div>New</div>
          </div>
          <h3>Country of rigin</h3>
          <div className="filters-list">
            <div>US</div>
            <div>UK</div>
            <div>Japan</div>
            <div>Russia</div>
            <span id="dots"></span>
            <span id="more">
              <div>South Korea</div>
              <div>China</div>
            </span>
            <span href="" id="myBtn" onClick={() => more()}>
              Show more
            </span>
          </div>
          <h3>Genres</h3>
          <div className="filters-list">
            <div>Action</div>
            <div>Drama</div>
            <div>Comedy</div>
            <div>Romance</div>
          </div>
        </div>
        <div className="tv-shows-search">
          <input type={"search"} placeholder={"Rick and Morty"}></input>
          <button type={"submit"}>Search</button>
        </div>
        <div className="tv-shows-head">
          <a href="" className="tv-show-name">
            Name
          </a>
          <a href="" className="tv-show-rating">
            Rating
          </a>
          <a href="" className="tv-show-watched-by">
            Watched by
          </a>

          <a href="" className="tv-show-year">
            Year
          </a>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/sherlock">Sherlock </Link>
            <img src={Pa} className="patrick"></img>
            <div className="digits">398 794</div>
            <div className="year">2010</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/got">Game of Thrones </Link>
            <img src={Pa} className="patrick"></img>
            <div className="digits">364 841</div>
            <div className="year">2010</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/bigbang">The Big Bang Theory </Link>
            <img src={Pa3} className="patrick"></img>
            <div className="digits">297 349</div>
            <div className="year">2007</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/supernatural">Supernatural </Link>
            <img src={Pa2} className="patrick"></img>
            <div className="digits">292 344</div>
            <div className="year">2005</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/misfits">Misfits </Link>
            <img src={Pa3} className="patrick"></img>
            <div className="digits">273 916</div>
            <div className="year">2009</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/friends">Friends </Link>
            <img src={Pa} className="patrick"></img>
            <div className="digits">206 489</div>
            <div className="year">1994</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/stranger">Stranger Things </Link>
            <img src={Pa} className="patrick"></img>
            <div className="digits">211 461</div>
            <div className="year">2016</div>
          </div>
        </div>
        <div className="tv-shows-row">
          <div className="row-container">
            <Link to="/kingdom">The Last kingdom</Link>
            <img src={Pa} className="patrick"></img>
            <div className="digits">19 400</div>
            <div className="year">2015</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVshows;
