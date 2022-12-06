import React from "react";
import { Link } from "react-router-dom";

const Friends = () => {
  return (
    <div className="sherlock-page">
      <div className="sherlock-content">
        <div className="breads">
          <Link to="/" className="link-sherlock">
            Home /{" "}
          </Link>
          <Link to="/TVshows" className="link-sherlock">
            Shows /
          </Link>
        </div>
        <h2 className="page-title">Friends</h2>
        <img
          src="https://media.myshows.me/shows/1920/3/90/3902fe3a363a08eb23b02d0743a2461d.jpg"
          className="sherlock-image"
        ></img>
        <div className="status-buttons">
          <button className="status-btn">Watching</button>
          <button className="status-btn">Going to</button>
          <button className="status-btn">Stopped watching</button>
          <button className="status-btn">Not watching</button>
        </div>
        <div className="description">
          <table className="description-table">
            <tr>
              <td>Original run:</td>
              <td>22.09.1994 — 06.05.2004</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>US</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Comedy, Romance/Dating</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>NBC</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>206 497 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>3 days 19 hours 17 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>22 min.</td>
            </tr>
            <tr>
              <td>Watched</td>
              <td>
                1 time
                <Link to="/sub" className="pro-icon">
                  PRO
                </Link>
              </td>
            </tr>
            <tr>
              <td>IMDB rating:</td>
              <td>8.9 of 10</td>
            </tr>
            <tr>
              <td>Kinopoisk rating:</td>
              <td>9.24 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div>
            Six young (20-something) people from New York City (Manhattan), on
            their own and struggling to survive in the real world, find the
            companionship, comfort and support they get from each other to be
            the perfect antidote to the pressures of life. This average group of
            buddies goes through massive mayhem, family trouble, past and future
            romances, fights, laughs, tears and surprises as they learn what it
            really means to be a friend.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;