import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Pages/home";
import Profile from "./components/Pages/profile";
import Subscription from "./components/Pages/subscription";
import TVshows from "./components/Pages/TVshows";

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
        </Routes>
      </div>
      </>
    );
  }
}
export default App;
