import Dashboard from "./MyComponents/Dashboard";
import LandingPage from "./MyComponents/LandingPage";
import Mainpage from "./MyComponents/Mainpage";
import SignIn from "./MyComponents/SignIn";
import SignUp from"./MyComponents/SignUp";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Dashboard></Dashboard> */}
    <SignUp></SignUp>

    {/* <Mainpage></Mainpage> */}
    {/* <LandingPage></LandingPage> */}
    {/* // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/SignIn">Sign In</Link>
    //         </li>
    //         <li>
    //           <Link to="/SignUp">Sign Up</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    {/* //     <Switch>
    //       <Route path="/SignIn">
    //         <SignIn />
    //       </Route>
    //       <Route path="/SignUp">
    //         <SignUp/>
    //       </Route>
    //       <Route path="/">
    //         <LandingPage />
    //       </Route>
    //     </Switch>
    //   </div> */}
    {/* // </Router> */} 
    </>
  );
}

export default App;
