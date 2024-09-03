import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import { LanguageProvider } from "./context";
import Home from "./components/Home";
import Movie from "./components/Movies";
import TvShows from "./components/Tvshows";
import Sports from "./components/Sports";
import Live from "./components/Live";
import './App.css'

function App() {
  return (
  <LanguageProvider>
    <BrowserRouter>
        <div className="app">
          <div className="header-container">
            <Settings/>
            <Menu/>
          </div>
          <Switch>
            <Route exact path="/"  component = {Home}/>
            <Route exact path="/movies" component = {Movie}/>
            <Route exact path="/tv-shows" component={TvShows} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/live" component={Live} />
          </Switch>
          </div>
    </BrowserRouter>
  </LanguageProvider>
  );
}

export default App;
