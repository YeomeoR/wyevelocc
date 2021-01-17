import React from 'react';
//Routing
import { Route, Switch, useLocation } from 'react-router-dom';
//components and pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Social from './pages/Social';
import EventsDetail from './pages/EventsDetail'
import SocialDetail from './pages/SocialDetail'
// styles
import GlobalStyle from './components/GlobalStyle';
//animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Route path="/events" exact>
          <Events />
              </Route>
              <Route path="/events/:id">
                  <EventsDetail />
              </Route>
        <Route path="/social" exact>
          <Social />
          </Route>
          <Route path="/social/:id">
            <SocialDetail />
          </Route>
        </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;