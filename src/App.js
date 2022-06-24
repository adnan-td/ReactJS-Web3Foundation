import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/footer/footer.component";
import Team from "./routes/team/team.component";
import Process from "./routes/process/process.component";
import AA from "./routes/aa/aa.component";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/animations/animatedpage.component";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <div>
                <Navigation />
                <AnimatedPage>
                  <Home />
                  <Footer />
                </AnimatedPage>
              </div>
            }
          ></Route>
          <Route
            path="/team"
            element={
              <div>
                <Navigation />
                <AnimatedPage>
                  <Team />
                  <Footer />
                </AnimatedPage>
              </div>
            }
          ></Route>
          <Route
            path="/process"
            element={
              <div>
                <Navigation />
                <Process />
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/accepted-applications"
            element={
              <div>
                <Navigation />
                <AnimatedPage>
                  <AA />
                </AnimatedPage>
              </div>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
