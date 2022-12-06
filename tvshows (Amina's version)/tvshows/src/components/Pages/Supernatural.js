import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Supernatural = () => {
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
        <h2 className="page-title">Supernatural</h2>
        <img
          src="https://www.denofgeek.com/wp-content/uploads/2020/11/supernatural-best-episodes.jpg?fit=1200%2C675"
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
              <td>13.09.2005 — 19.11.2020</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>US</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Action, Drama, Supernatural</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>CW</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>292 354 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>9 days 19 hours 47 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>43 min.</td>
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
              <td>8.4 of 10</td>
            </tr>
            <tr>
              <td>Kinopoisk rating:</td>
              <td>8.233 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div>
            More than ten years ago this TV-show started as a history about two
            brothers saving people and hunting things. They were trying to find
            their dad who once taught them this family business. Now it's a
            non-ending epic saga with all kinds of fantastic creatures from
            angels to demons including God himself who writes pulp fiction
            during his freetime...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supernatural;
