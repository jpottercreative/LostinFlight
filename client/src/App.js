import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './WelcomePage';
// import AlkonistProf from "./legend_profiles/AlkonistProf.js";
// import CaladriusProf from "./legend_profiles/CaladriusProf.js";
// import PhoenixProf from "./legend_profiles/PhoenixProf.js";
// import SirinProf from "./legend_profiles/SirinProf.js";
// import RokhProf from './legend_profiles/RokhProf';
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
// import SignUp from './SignUp';
// import Login from './Login';
import BirdCollection from './components/collection/BirdCollection';
import QuizContainer from './components/quiz/QuizContainer';


function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((name) => setUsername(name));
      }
    });
  }, []);


  return (
    <div>
      <NavBar onLogout={setUsername} user={username}/>
      <Switch>
        <Route path='/collection' >
          <BirdCollection />
        </Route>
        <Route path='/quiz' >
          <QuizContainer user={username}/>  
        </Route>
        <Route exact path='/'>
          <WelcomePage onLogin={setUsername}/>
        </Route> 
      </Switch>
    </div>

  );
}



export default App;
