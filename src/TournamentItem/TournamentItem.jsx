import "./TournamentItem.scss";

export const TournamentItem = ({ data }) => {
  const {
    name,
    status,
    isAvailable,
    tags,
    nameAccentPrime = false,
    nameAccent = false,
    date,
    players,
    score,
  } = data;
  return (
    <div className="tournamentItem">
      <div
        className={`tournamentItem__available-status ${
          isAvailable && "tournamentItem__available-status--active"
        }`}
      >
        {status}
      </div>

      <div className="tournamentItem__wrapper">
        <div className="tournamentItem__inner">
          <div className="tournamentItem__tags">
            {tags.map((icon, index) => (
              <img key={index} src={`${icon}`} alt="tags" />
            ))}
          </div>
          <p
            className={`tournamentItem__name ${
              nameAccentPrime && `tournamentItem__name--accent-prime`
            } ${nameAccent && `tournamentItem__name--accent`}`}
          >
            {name}
          </p>
        </div>

        <button
          className={`tournamentItem__button ${
            isAvailable && "tournamentItem__button--active"
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? "Join table" : "Cancelled"}
        </button>
      </div>

      <div className="tournamentItem__details details">
        <span className="tournamentItem__date details__decor details__decor--date">
          {date}
        </span>
        <span className="tournamentItem__players details__decor details__decor--players">
          {players}
        </span>
        <span className="tournamentItem__score details__decor details__decor--score">
          {score}
        </span>
      </div>
    </div>
  );
};
