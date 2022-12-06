import React from "react";
import { Link } from "react-router-dom";

const Bang = () => {
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
        <h2 className="page-title">Game of Thrones</h2>
        <img
          src="https://media.myshows.me/shows/1920/2/a9/2a93287bc53bbfc4467095edbc9088cc.jpg"
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
              <td>24.09.2007 — 27.12.2019</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>US</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Comedy</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>CBS</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>297 354 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>4 days 7 hours 56 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>22 min.</td>
            </tr>
            <tr>
              <td>Watched</td>
              <td>
                0 time
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
              <td>8.6 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div>
            The Big Bang Theory is a comedy about brilliant physicists, Leonard
            and Sheldon, who are the kind of "beautiful minds" that understand
            how the universe works. But none of that genius helps them interact
            with people, especially women. All this begins to change when a
            free-spirited beauty named Penny moves in next door. Sheldon,
            Leonard's roommate, is quite content spending his nights playing
            Klingon Boggle with their socially dysfunctional friends, fellow Cal
            Tech scientists Wolowitz and Koothrappali. However, Leonard sees in
            Penny a whole new universe of possibilities... including love.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bang;