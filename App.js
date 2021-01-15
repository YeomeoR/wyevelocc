import React from 'react';
//Routing
import { Route, Switch } from 'react-router-dom';
//components and pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Social from './pages/Social';
import EventsDetail from './pages/EventsDetail'
// styles
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/events" exact>
          <Events />
              </Route>
              <Route path="/events/:id">
                  <EventsDetail />
              </Route>
        <Route path="/social" exact >
          <Social />
        </Route>
      </Switch>
    </div>
  );
}

export default App;