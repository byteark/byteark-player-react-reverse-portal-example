import { useState, useMemo } from "react";
import * as portals from "react-reverse-portal";
import Player from "./Player";
import "./App.css";
import { SOURCE } from "./source";

function App() {
  const [index, setIndex] = useState(0);
  const [isPictureMode, setIsPictureMode] = useState(false);
  const [instance, setInstance] = useState();

  const portalNode = useMemo(() => portals.createHtmlPortalNode(), []);

  const nextVideo = () => {
    const nextIndex = index + 1 >= SOURCE.length ? 0 : index + 1;
    instance.src(SOURCE[nextIndex]);
    instance.poster(SOURCE[nextIndex].poster);
    if (isPictureMode) setIsPictureMode(false);
    setIndex(nextIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span className="title">
          BYTEARK PLAYER WITH REACT REVERSE PORTAL EXAMPLE
        </span>
        <div className="button-container">
          <button className="button" onClick={nextVideo}>
            next
          </button>
          <button
            className="button"
            onClick={() => setIsPictureMode(!isPictureMode)}
          >
            {isPictureMode ? "exit" : "enter"} picture mode
          </button>
        </div>
        <portals.InPortal node={portalNode}>
          <Player
            onReady={(playerInstance) => {
              setInstance(playerInstance);
            }}
          />
        </portals.InPortal>
        <div className="container-row">
          {SOURCE.map((videoSource,sourceIndex) => (
            <div className="container">
              {!isPictureMode && index === sourceIndex ? (
                <portals.OutPortal node={portalNode} />
              ) : (
                <img className="container-placeholder" src={videoSource.poster} />
              )}
            </div>
          ))}
        </div>
        <div className="picture-mode-container">
          {isPictureMode && <portals.OutPortal node={portalNode} />}
        </div>
      </header>
    </div>
  );
}

export default App;
