import "./application.component.scss";

const Application = ({ data }) => {
  const { teamname, teamlink, projname, githublink, terminated, firstdelivery, completed } = data;
  return (
    <div className="application">
      <div className="app-left">
        <h2>{projname}</h2>
        <div className="bottom-line">
          <p>
            <a href={teamlink}>{teamname}</a>
          </p>
          <div className="bl-r">
            <p>
              {firstdelivery ? <i className="fa-solid fa-check-double"></i> : <i className="fa-solid fa-xmark"></i>} <span>First Delivery</span>
            </p>
            {(() => {
              switch (Switcher(completed, terminated)) {
                case 0:
                  return <p className="incomplete">Incomplete</p>;
                case 1:
                  return <p className="complete">Completed</p>;
                case 2:
                  return <p className="terminate">Terminated</p>;
                default:
              }
            })()}
          </div>
        </div>
      </div>
      <p className="p-right">
        <a href={githublink}>
          <i className="fa-brands fa-github"></i>
        </a>
      </p>
    </div>
  );
};

export default Application;

const Switcher = (a, b) => {
  if (a && !b) return 1;
  else if (!a && b) return 2;
  else return 0;
};
