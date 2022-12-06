import React from "react";
import BlockComponent from "../BlockComponent";
import { Link, Route, Routes } from "react-router-dom";
import TVshows from "./TVshows";
import wednesday from "../../assets/Popular/wednesday.png";
import HouseOfTheDragon from "../../assets/Popular/House of the Dragon.png";
import l899 from "../../assets/Popular/1899.png";
import RickAndMorty from "../../assets/Popular/Rick and Morty.png";
import Brainstorm from "../../assets/TV series news/Brainstorm.png";
import Joker from "../../assets/TV series news/joker.png";
import WhenYouFinishSavingtheWorld from "../../assets/TV series news/When You Finish Saving the World.png";
import Wednesday from "../../assets/TV series news/Wednesday.png";


const Home = () => {
    return (
        <div className="homePage">
            <div className="search-area">
                <input className="search" type="search" placeholder="Rick and Morty" />
                <input className="home-button" type="button" value="Find" />
            </div>
            <div>
                <h1>Now popular</h1>
                <div className="block-component">
                    <BlockComponent src={wednesday} width="300px" height="170px" name="Wednesday" />
                    <BlockComponent src={HouseOfTheDragon} width="300px" height="170px" name="House of the Dragon" />
                    <BlockComponent src={l899} width="300px" height="170px" name="1899" />
                    <BlockComponent src={RickAndMorty} width="300px" height="170px" name="Rick and Morty" />
                </div>
                <Link className="link-to" to="/TVshows">TV Shows ratings</Link>
                <Routes>
                    <Route path='/TVshows' element={<TVshows />} />
                </Routes>
                <h1>TV series news</h1>
                <div className="block-component">
                    <BlockComponent src={Brainstorm} width="300px" height="170px" 
                    name="Watch a teaser trailer for Brainstorm from the creators of Ted Lasso" 
                    text="New comedy with Jason Segel and Harrison Ford." />
                    <BlockComponent src={Joker} width="300px" height="170px" 
                    name="7 more great pictures about loneliness" 
                    text="This time the movies are recommended by MyShows users - thanks for your comments." />
                    <BlockComponent src={WhenYouFinishSavingtheWorld} width="300px" height="170px" 
                    name="Trailer for dramedy When You Finish Saving the World with Julianne Moore and Finn Wolfhard released" 
                    text="Jesse Eisenberg's directorial debut will be released in January." />
                    <BlockComponent src={Wednesday} width="300px" height="170px" 
                    name="'Wednesday' beats 'Stranger Things' in terms of views" 
                    text="The series has become the most watched English-language show in Netflix history." />
                </div>
            </div>
        </div>
    );
};

export default Home;