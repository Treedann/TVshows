import React, { useState } from "react";
import ListComponent from "../ListComponent";
import Modal from "../modal";
import admin from "../../assets/Profile/admin.jpg";
import MyShows from "../../assets/Profile/MyShows-side.png";
import profile from "../../assets/Profile/Profile-side.png";
import Calendar from "../../assets/Profile/Calendar-side.png";
import Friends from "../../assets/Profile/Friends-side.png";
import Favorites from "../../assets/Profile/Favorites-side.png";
import Recommendations from "../../assets/Profile/Recommendations-side.png";
import BlockComponent from "../BlockComponent";

const Profile = () => {

    const [showBlockOne, setShowBlockOne] = useState(true);
    const [showBlockTwo, setShowBlockTwo] = useState(false);
    const [showBlockThree, setShowBlockThree] = useState(false);
    const [showBlockFour, setShowBlockFour] = useState(false);

    const [achievement1, setAchievement1] = useState(false);
    const [achievement2, setAchievement2] = useState(false);
    const [achievement3, setAchievement3] = useState(false);
    const [achievement4, setAchievement4] = useState(false);
    const [achievement5, setAchievement5] = useState(false);

    const showBlock = (number) => {
        if (number === 1) {
            setShowBlockOne(true)
            setShowBlockTwo(false)
            setShowBlockThree(false)
            setShowBlockFour(false)
        }
        else if (number === 2) {
            setShowBlockOne(false)
            setShowBlockTwo(true)
            setShowBlockThree(false)
            setShowBlockFour(false)
        }
        else if (number === 3) {
            setShowBlockOne(false)
            setShowBlockTwo(false)
            setShowBlockThree(true)
            setShowBlockFour(false)
        }
        else if (number === 4) {
            setShowBlockOne(false)
            setShowBlockTwo(false)
            setShowBlockThree(false)
            setShowBlockFour(true)
        }
     }

    return (
        <div className="profilePage">

            <div className="sidebar">
                <a className="sidebar-img" href="/profile"><img src={MyShows} alt="" /></a>
                <a className="sidebar-img" href="/profile"><img src={profile} alt="" /></a>
                <a className="sidebar-img" href="/profile"><img src={Calendar} alt="" /></a>
                <a className="sidebar-img" href="/profile"><img src={Friends} alt="" /></a>
                <a className="sidebar-img" href="/profile"><img src={Favorites} alt="" /></a>
                <a className="sidebar-img" href="/profile"><img src={Recommendations} alt="" /></a>
            </div>

            <div className="pageMain">
                <a href="/home">Home</a>
                <div className="user">
                    <div>
                        <h3>admin</h3>
                        <img className="admin-img" src={admin} width="100" height="100" alt=""/>
                    </div>
                    <div className="stats">
                        <div style={{color: "#c00"}}><p>494 episodes</p></div>
                        <div style={{color: "#00cc99"}}><p>371 hours</p></div>
                        <div style={{color: "#06c"}}><p>16 days</p></div>
                    </div>
                </div>
                <div className="statuses">
                    <button onClick={() => showBlock(1)}>Watching</button>
                    <button onClick={() => showBlock(2)}>Going to</button>
                    <button onClick={() => showBlock(3)}>Stopped watching</button>
                    <button onClick={() => showBlock(4)}>Watched all</button>
                </div>

                {showBlockOne && (<div className="each-status">
                    <ListComponent src={"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h"}
                    align="left" width="220px" height="125px" name="Game of Thrones" rating="4.66" episodes="33/73" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/c/72/c7251da9f67a47fb60df41ffdeddc97d.jpg"}
                    align="left" width="220px" height="125px" name="Rick and Morty" rating="4.69" episodes="59/60" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/5/a1/5a151b3a165235cd37444f0f0757e27b.jpg"}
                    align="left" width="220px" height="125px" name="American Horror Story" rating="4.17" episodes="104/123" />
                </div>)}

                {showBlockTwo && (<div className="each-status">
                    <ListComponent src={"https://media.myshows.me/shows/1920/f/ba/fba296eddb4f4eaf6d8b27c001fce514.jpg"}
                    align="left" width="220px" height="125px" name="Monster: The Jeffrey Dahmer Story" rating="4.2" episodes="0/10" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/2/2d/22d5550c0256b4fc9ad3dda787099428.jpg"}
                    align="left" width="220px" height="125px" name="Chernobyl" rating="4.73" episodes="0/5" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/0/c2/0c29613f893decccc881252ef9ad6f33.jpg"}
                    align="left" width="220px" height="125px" name="Breaking Bad" rating="4.56" episodes="0/62" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/4/3d/43d8990d7bf50bb21da691f9ddafd509.jpg"}
                    align="left" width="220px" height="125px" name="Black Mirror" rating="4.5" episodes="0/21" />
                </div>)}

                {showBlockThree && (<div className="each-status">            
                    <ListComponent src={"https://media.myshows.me/shows/1920/8/3c/83cf98d2314746a7836a75b18a225d56.jpg"}
                    align="left" width="220px" height="125px" name="Élite" rating="4.31" episodes="40/48" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/4/9e/49eb2ed937367f816c9f092d6a883a69.jpg"}
                    align="left" width="220px" height="125px" name="Riverdale" rating="3.77" episodes="70/117" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/c/21/c2165917fc7620a4d0305d714f7e3c81.jpg"}
                    align="left" width="220px" height="125px" name="The Umbrella Academy" rating="4.27" episodes="4/30" />
                </div>)}

                {showBlockFour && (<div className="each-status">
                    <ListComponent src={"https://media.myshows.me/shows/1920/7/10/710edb86237a27d304b4e1abb41e0ba0.jpg"}
                    align="left" width="220px" height="125px" name="La Casa de Papel" rating="4.59" episodes="41/41" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/3/7b/37bad18136fc32508dd64f9b5786e2c5.jpg"}
                    align="left" width="220px" height="125px" name="Peacemaker" rating="4.4" episodes="8/8" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/3/68/368c09e93943add87f20d90d87f73064.jpg"}
                    align="left" width="220px" height="125px" name="Avatar: The Last Airbender" rating="4.63" episodes="61/61" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/1/64/1643076861bb18165735f2b1809d0189.jpg"}
                    align="left" width="220px" height="125px" name="Sex Education" rating="4.55" episodes="24/24" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/c/8b/c8b4dbfcd58e25fca042dd533cba7f03.jpg"}
                    align="left" width="220px" height="125px" name="The Boys" rating="4.53" episodes="24/24" />
                    <ListComponent src={"https://media.myshows.me/shows/1920/f/83/f83d8a7a85d59d94c12568e1af7561a4.jpg"}
                    align="left" width="220px" height="125px" name="Dark" rating="4.4" episodes="26/26" />
                </div>)}
            </div>

            <div className="pageAside">
                <div className="aside-profile">
                    <h3>Profile</h3>
                    <ul>
                        <li><a href="/profile">Friends activity</a></li>
                        <li><a href="/profile">Achievements</a></li>
                        <li><a href="/profile">Full stats</a></li>
                        <li><a href="/profile">My lists</a></li>
                        <li><a href="/profile">Comments</a></li>
                        <li><a href="/profile">Notes</a></li>
                        <li><a href="/profile">Settings</a></li>
                        <li><a href="/profile">PRO</a></li>
                        <li><a href="/profile">Support</a></li>
                    </ul>
                </div>
                <div className="aside-achievements">
                    <h3>Achievements</h3> 
                    <div className="a-achievements">
                        <a onClick={() => setAchievement1(true)}><img src="https://myshows.me/shared/img/fe/rewards/emmys2022.png" width="60" heignt="77" alt="" /></a>
                        <a onClick={() => setAchievement2(true)}><img src="https://myshows.me/shared/img/fe/rewards/newschool.png" width="60" heignt="77" alt="" /></a>
                        <a onClick={() => setAchievement3(true)}><img src="https://myshows.me/shared/img/fe/rewards/fantast.png" width="60" heignt="77" alt="" /></a>
                        <a onClick={() => setAchievement4(true)}><img src="https://myshows.me/shared/img/fe/rewards/30days.png" width="60" heignt="77" alt="" /></a>
                        <a onClick={() => setAchievement5(true)}><img src="https://myshows.me/shared/img/fe/rewards/dodo_award.png" width="60" heignt="77" alt="" /></a>
                    </div>
                </div>
                <div className="friends">
                    <h3>Friends</h3>
                    <BlockComponent src="https://cdn-icons-png.flaticon.com/512/805/805390.png" width="40" height="40" name="friend" />
                    <BlockComponent src="https://cdn-icons-png.flaticon.com/512/8429/8429750.png" width="40" height="40" name="mate" />
                    <BlockComponent src="https://cdn-icons-png.flaticon.com/512/1090/1090806.png" width="40" height="40" name="friendly neighbor" />
                    <BlockComponent src="https://cdn-icons-png.flaticon.com/512/1459/1459676.png" width="40" height="40" name="bobo" />
                    <BlockComponent src="https://cdn-icons-png.flaticon.com/512/8283/8283042.png" width="40" height="40" name="orc" />
                </div>
            </div>

            <Modal active={achievement1} setActive={setAchievement1}>
                <div className="achieve-popup">
                    <img src="https://myshows.me/shared/img/fe/rewards/emmys2022.png" width="120" height="154" alt="" />
                    <h3>Emmys 2022</h3>
                    <p>Participated in voting in 2022</p>
                </div>
            </Modal>
            <Modal active={achievement2} setActive={setAchievement2}>
                <div className="achieve-popup">
                    <img src="https://myshows.me/shared/img/fe/rewards/newschool.png" width="120" height="154" alt="" />
                    <h3>New School</h3>
                    <p>Watching 10 series this year</p>
                </div>
            </Modal>
            <Modal active={achievement3} setActive={setAchievement3}>
                <div className="achieve-popup">
                    <img src="https://myshows.me/shared/img/fe/rewards/fantast.png" width="120" height="154" alt="" />
                    <h3>Fantast I</h3>
                    <p>Watches 10 Sci-Fi series</p>
                </div>
            </Modal>
            <Modal active={achievement4} setActive={setAchievement4}>
                <div className="achieve-popup">
                    <img src="https://myshows.me/shared/img/fe/rewards/30days.png" width="120" height="154" alt="" />
                    <h3>Not a day without a series (30)</h3>
                    <p>Watched series 30 days in a row</p>
                </div>
            </Modal>
            <Modal active={achievement5} setActive={setAchievement5}>
                <div className="achieve-popup">
                    <img src="https://myshows.me/shared/img/fe/rewards/dodo_award.png" width="120" height="154" alt="" />
                    <h3>Watching TV shows Top 20 2020</h3>
                    <p>Watches the most talked about series from the selection of 2020</p>
                </div>
            </Modal>
        </div>
    );
};

export default Profile;