import './App.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Info from './components/Info';
import SignIn from './components/Login/Login';
import SignUp from './components/Login/Register';
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";
import {auth} from "./base/Firebase";
import { useEffect } from 'react';

function App() {
  const [{gun,user},dispatch] =useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    });
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Navbar/>
            <SignUp/>
          </Route>
          <Route path="/login">
            <Navbar/>
            <SignIn/>
          </Route>
          <Route path="/arma">
            <Info/>
          </Route>
          <Route path="/">
            <Navbar/>
            <Blog/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
