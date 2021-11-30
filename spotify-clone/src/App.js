import LandingPage from "./MyComponents/LandingPage";
import SignIn from './MyComponents/SignIn'
import SignUp from './MyComponents/SignUp'
import Premium from './MyComponents/Premium'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Download from './MyComponents/Download'

function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path = "/" component={LandingPage}></Route>
         <Route exact path = "/signin" component={SignIn}></Route>
         <Route exact path ="/signup" component ={SignUp}></Route>
         <Route exact path = "/premium" component={Premium}></Route> 
         <Route exact path = "/downloads" component={Download}></Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
