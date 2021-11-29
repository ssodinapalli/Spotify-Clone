import LandingPage from "./MyComponents/LandingPage";
import SignIn from './MyComponents/SignIn'
import SignUp from './MyComponents/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path = "/" component={LandingPage}></Route>
         <Route exact path = "/signin" component={SignIn}></Route>
         <Route exact path ="/signup" component ={SignUp}></Route>
       </Switch>
     </Router>
    
    </>
  );
}

export default App;
