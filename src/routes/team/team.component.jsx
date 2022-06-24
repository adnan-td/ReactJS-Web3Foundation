import "./team.component.scss";
import empic from "../../assets/emptyprofile.jpg";

const GC = [
  {
    name: "Santiago Balaguer",
    github: "https://github.com/SBalaguer",
    pic: "https://avatars.githubusercontent.com/u/10047147?v=4",
  },
  {
    name: "Aeron Buchanan",
    github: "https://github.com/aeronbuchanan",
    pic: "https://avatars.githubusercontent.com/u/1917673?v=4",
  },
  {
    name: "Gautam Dhameja",
    github: "https://github.com/gautamdhameja",
    pic: "https://avatars.githubusercontent.com/u/5374052?v=4",
  },
  {
    name: "Ashley Grevelink",
    github: "https://github.com/cruikshankss",
    pic: "https://avatars.githubusercontent.com/u/22508682?v=4",
  },
  {
    name: "David Hawig",
    github: "https://github.com/Noc2",
    pic: "https://avatars.githubusercontent.com/u/24638510?v=4",
  },
  {
    name: "Sebastian Müller",
    github: "https://github.com/semuelle",
    pic: "https://avatars.githubusercontent.com/u/1389409?v=4",
  },
  {
    name: "Bill Laboon",
    github: "https://github.com/laboon",
    pic: "https://avatars.githubusercontent.com/u/1417717?v=4",
  },
  {
    name: "RRTTI",
    github: "https://github.com/rrtti",
    pic: "https://avatars.githubusercontent.com/u/22815262?v=4",
  },
  {
    name: "Aleixo Sanchez",
    github: "https://github.com/alxs",
    pic: "https://avatars.githubusercontent.com/u/15819210?v=4",
  },
  {
    name: "S E R A Y A",
    github: "https://github.com/takahser",
    pic: "https://avatars.githubusercontent.com/u/5393704?v=4",
  },
  {
    name: "Reto Trinkler",
    github: "https://github.com/retotrinkler",
    pic: "none",
  },
  {
    name: "BenWhiteJam",
    github: "https://github.com/BenWhiteJam",
    pic: "https://avatars.githubusercontent.com/u/41975995?v=4",
  },
  {
    name: "Gavin Wood",
    github: "https://github.com/gavofyork",
    pic: "https://avatars.githubusercontent.com/u/138296?v=4",
  },
];

const GE = [
  {
    name: "ashley grevelink",
    github: "https://github.com/cruikshankss",
    pic: "https://avatars.githubusercontent.com/u/22508682?v=4",
  },
  {
    name: "David Hawig",
    github: "https://github.com/Noc2",
    pic: "https://avatars.githubusercontent.com/u/24638510?v=4",
  },
  {
    name: "Sebastian Müller",
    github: "https://github.com/semuelle",
    pic: "https://avatars.githubusercontent.com/u/1389409?v=4",
  },
  {
    name: "Aleixo Sanchez",
    github: "https://github.com/alxs",
    pic: "https://avatars.githubusercontent.com/u/15819210?v=4",
  },
  {
    name: "S E R A Y A",
    github: "https://github.com/takahser",
    pic: "https://avatars.githubusercontent.com/u/5393704?v=4",
  },
];

const OT = [
  {
    name: "Melanie Diener",
    github: "https://github.com/meldien",
    pic: "none",
  },
  {
    name: "Federica Dubbini",
    github: "https://github.com/fededubbi",
    pic: "none",
  },
  {
    name: "Kasper Mai Jørgensen",
    github: "https://github.com/KasperJor",
    pic: "none",
  },
  {
    name: "Rouven Pérez",
    github: "https://github.com/RouvenP",
    pic: "none",
  },
];

const Team = () => {
  return (
    <div className="team">
      <p className="headersmall">Our Team</p>
      <h1>W3F Grants Committee</h1>
      <div className="underline"></div>
      <p>The committee consists of individuals who know the funding priorities of the Polkadot ecosystem, and is responsible for evaluating grant applications and providing feedback on these.</p>
      <p>In cases where a niche expert opinion is desirable, one of the committee members may request such a review.</p>
      <Cards data={GC} />
      <h1>W3F Grants Evaluators</h1>
      <div className="underline"></div>
      <p>Evaluators are individuals able to evaluate the technology delivered as a result of the Grants Program. The committee has the right to add or remove evaluators on the basis of supermajority.</p>
      <Cards data={GE} />
      <h1>W3F Operations Team</h1>
      <div className="underline2"></div>
      <p>The Operations Team takes care of legal documents, invoicing and remittances.</p>
      <Cards data={OT} />
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="card" data-aos="flip-right">
      <div className="card-img">
        <img alt="loading" src={data.pic === "none" ? empic : data.pic} />
      </div>
      <h2>{data.name}</h2>
      <div className="gitlink-container">
        <a href={data.github}>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

const Cards = ({ data }) => {
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    arr.push(<Card key={i} data={data[i]} />);
  }
  return <div className="card-container">{arr}</div>;
};

export default Team;
