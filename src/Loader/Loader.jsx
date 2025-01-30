import "./Loader.scss";

export const Loader = ({ data }) => {
  const { percent } = data;
  return (
    <div className="loader">
      <div className="loader__progress" style={{ width: `${percent}%` }}></div>
      <span className="loader__text">Loading {percent}%</span>
    </div>
  );
};
