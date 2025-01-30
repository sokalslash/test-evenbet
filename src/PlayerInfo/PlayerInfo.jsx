import { useState } from "react";
import "./PlayerInfo.scss";

export const PlayerInfo = ({ data }) => {
  const [isScoreBtnShort, setIsScoreBtnShort] = useState(false);

  const { userName, avatar, starts, balance } = data;
  return (
    <div className="player-info">
      <div className="player-info__inner">
        <p className="player-info__user-name">{userName}</p>
        <div className="player-info__star-rating">
          {[...Array(starts)].map((n, i) => (
            <div className="star" key={i}></div>
          ))}
        </div>
      </div>

      <div className="player-info__img">
        <img src={avatar} width="35" height="35" alt="avatar" />
      </div>

      <div className="score">
        <button
          className={`score__show-btn ${
            isScoreBtnShort && "score__show-btn--short"
          }`}
          onClick={() => setIsScoreBtnShort(!isScoreBtnShort)}
        >
          <span className="score__show-btn-text">Show balance</span>
        </button>
        <p className="score__balance">{`$${balance}`}</p>
      </div>
    </div>
  );
};
