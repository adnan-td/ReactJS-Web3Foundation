import { useState, useEffect } from "react";
import Application from "../../components/application/application.component";
import "./aa.component.scss";
import jsondata from "../../scraper/data.json";
import AnimatedNav from "../../components/animations/animateddropdown.component";

const AA = () => {
  const [dropdownstate, SetDropdownstate] = useState([true, false, false, false]);
  const [isVisible, SetIsvisible] = useState(false);
  const [searchField, SetSearchField] = useState("");
  const [applicationData, SetApplicationData] = useState([]);
  const [filteredData, SetFilteredData] = useState([]);
  const [filterRadios, SetFilterRadios] = useState([true, false, false, false]);
  const [filterConditions, SetFilterConditions] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
  });
  useEffect(() => {
    SetApplicationData(jsondata);
  }, []);

  useEffect(() => {
    let condition = [];
    Object.keys(filterConditions).map((key, index) => {
      if (filterConditions[key]) condition.push(key);
      return "";
    });
    const statuschecker = (item) => {
      const n = filterRadios.findIndex((el) => el === true);
      switch (n) {
        case 1:
          return item.firstdelivery;
        case 2:
          return item.completed;
        case 3:
          return item.terminated;
        default:
          return true;
      }
    };
    SetFilteredData(
      applicationData.filter((item) => {
        const boolsearchproj = item.projname.toLocaleLowerCase().includes(searchField);
        let boolfilter = condition.includes(`${item.tableno}`);
        if (condition.length === 0) {
          boolfilter = true;
        }
        const status = statuschecker(item);
        const boolsearchtname = item.teamname.toLocaleLowerCase().includes(searchField);
        return (boolsearchproj || boolsearchtname) && boolfilter && status;
      })
    );
  }, [applicationData, searchField, filterConditions, filterRadios]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        SetIsvisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const checkboxchange = (event, n) => {
    const temp = { ...filterConditions };
    temp[n] = !temp[n];
    SetFilterConditions(temp);
  };

  const dropdownhandler = (n) => {
    n--;
    const temp = [...dropdownstate];
    for (let i = 0; i < 4; i++) {
      if (i === n) {
        temp[n] = !temp[n];
      } else {
        temp[i] = false;
      }
    }
    SetDropdownstate(temp);
  };

  const radiohandler = (n) => {
    n--;
    const temp = [...filterRadios];
    for (let i = 0; i < 4; i++) {
      if (i === n) {
        temp[n] = true;
      } else {
        temp[i] = false;
      }
    }
    SetFilterRadios(temp);
  };

  const statustext = () => {
    const n = filterRadios.findIndex((el) => el === true);
    switch (n) {
      case 1:
        return "First Delivery";
      case 2:
        return "Completed";
      case 3:
        return "Terminated";
      default:
        return "All";
    }
  };

  return (
    <div className={isVisible ? "aa invisible" : "aa"}>
      <h1>Accepted applications</h1>
      <div className="underline"></div>

      <div className="main">
        <div className={isVisible ? "main-left visible" : "main-left"}>
          <p className="filter2">
            <button
              onClick={() => {
                SetIsvisible(!isVisible);
              }}
            >
              <i className="fa-solid fa-sliders"></i>
            </button>
          </p>
          <h2>Filter</h2>
          <hr />

          <h3>Project Status</h3>
          <div className="filter-radios">
            <div>
              <input
                type="radio"
                id="rad1"
                name="all"
                value="all"
                checked={filterRadios[0]}
                onChange={() => {
                  radiohandler(1);
                }}
              />
              <label htmlFor="rad1">All</label>
            </div>
            <div>
              <input
                type="radio"
                id="rad2"
                name="firstdelivery"
                value="firstdelivery"
                checked={filterRadios[1]}
                onChange={() => {
                  radiohandler(2);
                }}
              />
              <label htmlFor="rad2">First Delivery</label>
            </div>
            <div>
              <input
                type="radio"
                id="rad3"
                name="completed"
                value="completed"
                checked={filterRadios[2]}
                onChange={() => {
                  radiohandler(3);
                }}
              />
              <label htmlFor="rad3">Completed</label>
            </div>
            <div>
              <input
                type="radio"
                id="rad4"
                name="terminated"
                value="terminated"
                checked={filterRadios[3]}
                onChange={() => {
                  radiohandler(4);
                }}
              />
              <label htmlFor="rad4">Terminated</label>
            </div>
          </div>
          <hr />

          <h3>Year</h3>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(1)}>
              <p>2019</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[0] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input type="checkbox" name="w1" checked={filterConditions[1]} onChange={(event) => checkboxchange(event, 1)} />
                  <label>Wave 1 - First Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w2" checked={filterConditions[2]} onChange={(event) => checkboxchange(event, 2)} />
                  <label>Wave 2 - Second Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w3" checked={filterConditions[3]} onChange={(event) => checkboxchange(event, 3)} />
                  <label>Wave 3 - Third Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w4" checked={filterConditions[4]} onChange={(event) => checkboxchange(event, 4)} />
                  <label>Wave 4 - Fourth Quarter</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(2)}>
              <p>2020</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[1] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input type="checkbox" name="w1" checked={filterConditions[5]} onChange={(event) => checkboxchange(event, 5)} />
                  <label>Wave 5 - First Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w2" checked={filterConditions[6]} onChange={(event) => checkboxchange(event, 6)} />
                  <label>Wave 6 - Second Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w3" checked={filterConditions[7]} onChange={(event) => checkboxchange(event, 7)} />
                  <label>Wave 7 - Third Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w4" checked={filterConditions[8]} onChange={(event) => checkboxchange(event, 8)} />
                  <label>Wave 8 - Fourth Quarter</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(3)}>
              <p>2021</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[2] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input type="checkbox" name="w1" checked={filterConditions[9]} onChange={(event) => checkboxchange(event, 9)} />
                  <label>Wave 9 - First Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w2" checked={filterConditions[10]} onChange={(event) => checkboxchange(event, 10)} />
                  <label>Wave 10 - Second Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w3" checked={filterConditions[11]} onChange={(event) => checkboxchange(event, 11)} />
                  <label>Wave 11 - Third Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w4" checked={filterConditions[12]} onChange={(event) => checkboxchange(event, 12)} />
                  <label>Wave 12 - Fourth Quarter</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => dropdownhandler(4)}>
              <p>2022</p>
              <p>
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </button>
            {dropdownstate[3] ? (
              <AnimatedNav className="dropdown-content">
                <div className="inp-container">
                  <input type="checkbox" name="w1" checked={filterConditions[13]} onChange={(event) => checkboxchange(event, 13)} />
                  <label>Wave 13 - First Quarter</label>
                </div>
                <div className="inp-container">
                  <input type="checkbox" name="w2" checked={filterConditions[14]} onChange={(event) => checkboxchange(event, 14)} />
                  <label>Wave 14 - Second Quarter</label>
                </div>
              </AnimatedNav>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="main-right">
          <div className="search-box">
            <p className="magnify">
              <i className="fa-solid fa-magnifying-glass"></i>
            </p>
            <div className="inp-d">
              <input
                placeholder="Search by projects or team"
                type="search"
                onChange={(event) => {
                  SetSearchField(event.target.value.toLocaleLowerCase());
                }}
              />
            </div>
            {isVisible ? (
              ""
            ) : (
              <p className={isVisible ? "filter filter-pos" : "filter"}>
                <button
                  onClick={() => {
                    SetIsvisible(!isVisible);
                  }}
                >
                  <i className="fa-solid fa-sliders"></i>
                </button>
              </p>
            )}
          </div>
          <div className="details">
            <p>Showing {filteredData.length} results</p>
            <p>{statustext()}</p>
          </div>
          <div className="applications-container">
            <MultiApplication data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AA;

const MultiApplication = ({ data }) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(<Application data={data[i]} key={i} />);
  }
  return <div className="applications">{arr}</div>;
};
