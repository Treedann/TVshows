import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Sherlock = () => {
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
        <h2 className="page-title">Sherlock</h2>
        <img
          src="https://media.myshows.me/shows/1920/9/49/9492ce09d3a31c32ba559f5936dac888.jpg"
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
              <td>25.07.2010 - 15.01.2017</td>
            </tr>
            <tr>
              <td>Country of origin: </td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Crime, Drama, Mystery</td>
            </tr>
            <tr>
              <td>Network</td>
              <td>BBC One</td>
            </tr>
            <tr>
              <td>Watched by:</td>
              <td>398 807 of 797 737</td>
            </tr>
            <tr>
              <td>Total running time: </td>
              <td>22 hours 7 minutes</td>
            </tr>
            <tr>
              <td>Episode duration: </td>
              <td>90 min.</td>
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
              <td>9.1 of 10</td>
            </tr>
            <tr>
              <td>Kinopoisk rating:</td>
              <td>8.863 of 10</td>
            </tr>
          </table>
        </div>
        <div className="plot-title">
          <h3 className="plot">Plot</h3>
          <div>
            A veteran of Afghan war is suffering from PTSD and urgently needs to
            find a new flatmate. His friend introduces him to a possible
            companion - mister Sherlock Holmes, self-proclaimed genius,
            high-functioning sociopath and private detective... In the meantime,
            Scotland Yard tries to find a serial killer who is terrorizing
            London and fails again and again. Great music, stylish visual
            effects, all kind of gadgets and other gifts of the twenty first
            century, outstanding performances of Benedict Cumberbatch, Martin
            Freeman and Andrew Scott - that's what makes this TV-show so unique.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sherlock;
