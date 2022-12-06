import React from "react";
import BlockComponent from "../BlockComponent";
import { Link, Route, Routes } from "react-router-dom";
import TVshows from "./TVshows";
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
                    <BlockComponent src={"https://media.myshows.me/shows/1920/f/85/f85ac77e217d956c331731300c9cd36d.jpg"} width="300px" height="170px" name="Wednesday" text="39 719 watching" />
                    <BlockComponent src={"https://media.myshows.me/shows/1920/1/1f/11f9da4eeaa6e0def93af38638a16bd1.jpg"} width="300px" height="170px" name="House of the Dragon" text="57 459 watching" />
                    <BlockComponent src={"https://media.myshows.me/shows/1920/b/79/b79a2d4f0c7e91558b9bd489b11a1d58.jpg"} width="300px" height="170px" name="1899" text="19 314 watching" />
                    <BlockComponent src={"https://media.myshows.me/shows/1920/c/72/c7251da9f67a47fb60df41ffdeddc97d.jpg"} width="300px" height="170px" name="Rick and Morty" text="	131 252 watching" />
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
                <h1>4 best British sitcoms</h1>
                <div className="block-component">
                    <BlockComponent src={"https://media.myshows.me/shows/1920/8/8b/88b22b735dca8e03a3dec6cbe7dd00f3.jpg"} width="300px" height="170px" name="Black Books" text="69 326 watching" />
                    <BlockComponent src={"https://media.myshows.me/shows/1920/e/96/e969e126f75ee7e59d761065fbf3e949.jpg"} width="300px" height="170px" name="The IT Crowd" text="57 796 watching" />
                    <BlockComponent src={"https://media.myshows.me/shows/1920/b/79/b79a2d4f0c7e91558b9bd489b11a1d58.jpg"} width="300px" height="170px" name="Father Ted" text="3 927 watching" />
                    <BlockComponent src={"https://media.myshows.me/shows/1920/1/43/143ddbbac322d1e24d36c0be6074b2ae.jpg"} width="300px" height="170px" name="Blackadder" text="	3 329 watching" />
                </div>
            </div>
        </div>
    );
};

export default Home;