import React from "react";
import { Link } from "react-router-dom";

const GOT = () => {
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
          src="https://media.myshows.me/shows/1920/d/d1/dd10e6a042a3766f7c3173a1397dcd0d.jpg"
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
              <td>17.04.2011 - 26.05.2019</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>US</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Adventure, Drama, Fantasy</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>HBO</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>364 856 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>3 days 9 hours 8 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>57 min.</td>
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
              <td>9.2 of 10</td>
            </tr>
            <tr>
              <td>Kinopoisk rating:</td>
              <td>8.961 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div className="plotText">
            Based on the bestselling book series A Song of Ice and Fire by
            George R.R. Martin, this sprawling new HBO drama is set in a world
            where summers span decades and winters can last a lifetime. From the
            scheming south and the savage eastern lands, to the frozen north and
            ancient Wall that protects the realm from the mysterious darkness
            beyond, the powerful families of the Seven Kingdoms are locked in a
            battle for the Iron Throne. This is a story of duplicity and
            treachery, nobility and honor, conquest and triumph. In the Game of
            Thrones, you either win or you die.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GOT;