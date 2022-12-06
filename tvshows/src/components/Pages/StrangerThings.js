import React from "react";
import { Link } from "react-router-dom";

const StrangerThings = () => {
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
          src="https://media.myshows.me/shows/1920/9/15/915b56d169568a7431e671770d426f60.jpg"
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
              <td>15.07.2016 — ...</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>US</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Drama, Sci-Fi, Horror/Supernatural</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>Netflix</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>211 484 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>1 day 11 hours 39 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>62 min.</td>
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
              <td>8.7 of 10</td>
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
            A love letter to the '80s classics that captivated a generation,
            Stranger Things is set in 1983 Indiana, where a young boy vanishes
            into thin air. As friends, family and local police search for
            answers, they are drawn into an extraordinary mystery involving
            top-secret government experiments, terrifying supernatural forces
            and one very strange little girl.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrangerThings;