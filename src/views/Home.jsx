import * as React from "react";
import HomeContainer from "../components/Container";
const Home = () => {
  let audio = new Audio("/christmasSong.mp3");
  const start = () => {
    audio.play();
  };
  return (
    <div>
      <HomeContainer />
      <button onClick={start}>Play</button>
    </div>
  );
};
export default Home;
