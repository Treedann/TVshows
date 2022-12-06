import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Pages/home";
import Profile from "./components/Pages/profile";
import Subscription from "./components/Pages/subscription";
import TVshows from "./components/Pages/TVshows";
import Sherlock from "./components/Pages/Sherlock";
import GOT from "./components/Pages/GOT";
import Bang from "./components/Pages/Bang";
import Supernatural from "./components/Pages/Supernatural";
import Misfits from "./components/Pages/Misfits";
import Friends from "./components/Pages/Friends";
import StrangerThings from "./components/Pages/StrangerThings";
import TheLastKingdom from "./components/Pages/TheLastKingdom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

      <div style={{marginTop: "49px"}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TVshows' element={<TVshows />} />
          <Route path='/sub' element={<Subscription />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/sherlock" element={<Sherlock />} />
          <Route path="/got" element={<GOT />} />
          <Route path="/bigbang" element={<Bang />} />
          <Route path="/supernatural" element={<Supernatural />} />
          <Route path="/misfits" element={<Misfits />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/stranger" element={<StrangerThings />} />
          <Route path="/kingdom" element={<TheLastKingdom />} />
        </Routes>
      </div>
      </>
    );
  }
}
export default App;
