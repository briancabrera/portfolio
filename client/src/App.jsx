import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Intro from './Components/Intro/Intro.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
