import React from "react";
import { Link } from "react-router-dom";

const Misfits = () => {
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
        <h2 className="page-title">Misfits</h2>
        <img
          src="https://media.myshows.me/shows/1920/1/23/123145dc590e00e6c762a53f0b54983b.jpg"
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
              <td>12.11.2009 — 11.12.2013</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Comedy, Drama, Sci-Fi</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>E4</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>273 927 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>1 day 5 hours 23 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>47 min.</td>
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
              <td>8.2 of 10</td>
            </tr>
            <tr>
              <td>Kinopoisk rating:</td>
              <td>8.068 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div>
            When five young outsiders on Community Service get caught in a
            strange storm, they discover that they have developed superpowers.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misfits;