import LandingPage from "./MyComponents/LandingPage";
import SignIn from "./MyComponents/SignIn";
import SignUp from "./MyComponents/SignUp";
import Premium from "./MyComponents/Premium";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Download from "./MyComponents/Download";
// import Contributors from "./MyComponents/Contributors";
import { useState, useEffect } from "react";
import Player from "./MyComponents/Player";

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />      
      {/* <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/premium" component={Premium}></Route>
          <Route exact path="/downloads" component={Download}></Route>
          <Route exact path="/contributors" component={Contributors}></Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
