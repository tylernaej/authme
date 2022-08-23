// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsMainComponent from "./components/SpotsMainComponent/SpotsMainComponent";
import './app.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const activeSpot = useSelector(state => state.spots.activeSpot)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  console.log('activespot', activeSpot)
  return (
    <div className="page-body">
      <Navigation isLoaded={isLoaded} />
      <div>
        <Switch>
          <Route path='/' exact={true}>
            <SpotsMainComponent />
          </Route>
          {activeSpot &&
            <Route path={`/spots/${activeSpot.id}`}>
              <div>
                There will be Information here about {activeSpot.name}
              </div>
            </Route>
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;