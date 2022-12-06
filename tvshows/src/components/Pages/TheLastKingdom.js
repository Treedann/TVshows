import React from "react";
import { Link } from "react-router-dom";

const TheLastKingdom = () => {
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
        <h2 className="page-title">The Last Kingdom</h2>
        <img
          src="https://media.myshows.me/shows/1920/1/f7/1f787afdf2465eb18302a31d5eab3174.jpg"
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
              <td>10.10.2015 — 09.03.2022</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>US</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Action, Drama, History</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>BBC Two</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>19 403 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>1 day 17 hours 32 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>60 min.</td>
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
              <td>8.5 of 10</td>
            </tr>
            <tr>
              <td>Kinopoisk rating:</td>
              <td>7.873 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div>
            The Last Kingdom is a show of heroic deeds and epic battles but with
            a thematic depth that embraces politics, religion, warfare, courage,
            love, loyalty and our universal search for identity. Combining real
            historical figures and events with fictional characters, it is the
            story of how a people combined their strength under one of the most
            iconic kings of history in order to reclaim their land for
            themselves and build a place they call home.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheLastKingdom;