import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Spinner } from "./Spinner/Spinner";
import { PlayerInfo } from "./PlayerInfo/PlayerInfo";
import { Loader } from "./Loader/Loader";
import { TournamentItem } from "./TournamentItem/TournamentItem";
import "./index.scss";
import { dataPalayerInfo, dataLoader, dataTournamentItem } from "./mocks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="main container">
      <h1 className="main-title">Poker</h1>

      <div className="main__spinner-container">
        <Spinner />
      </div>

      <section className="main__section-player">
        <PlayerInfo data={dataPalayerInfo} />
      </section>
      <Loader data={dataLoader} />
      <section className="main__section-tournaments tournaments">
        <ul className="tournaments__list">
          {console.log(dataTournamentItem)}
          {dataTournamentItem.map((tournament, index) => (
            <TournamentItem key={index} data={tournament} />
          ))}
        </ul>
      </section>
    </main>
  </StrictMode>
);
