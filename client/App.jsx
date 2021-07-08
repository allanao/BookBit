import React, { useState } from 'react';
import '../prettify.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "../components/login.jsx";
import Signup from "../components/signup.jsx";
import ShelfView from "../components/ShelfView.jsx";
import SearchView from "../components/SearchView.jsx";

export default function App() {

  const [redirect, setRedirect] = useState(null);

  // const handleRedirect = () => {
  //   console.log("hit func");
  //   setRedirect('/shelf');
  //   let result;
  //   return result;
  // }

  let result;
  
  if (redirect) {
    return (
    <Router>
      <Redirect to={redirect} />
      {/* <Switch>
        <Route exact path="/shelf" component={ShelfView} />
      </Switch> */}
    </Router>
    );
  }
  
  return (
    // <Router>
    //   <div>
    //   <Switch>
    //    <Route exact path="/">
    //     <div className="logingif">
    //       <img src="../page.png" width="600 px" height="480 px"></img>
    //     </div>
    //      <div className="logingif"> 
    //         <img src="../logingif.gif" width="600 px" height="480 px"></img>
    //     </div>
    //     <div className="container" className="imagetitle">
    //     <div className="row">
    //       <div className="col">
    //       <img src="../logoclear.png" className="books"></img>
    //       </div>
    //       <div className="col">
    //       <h4 className="title">BookBit</h4>
    //       </div>
    //     </div>
    //     </div>
    //     <div className="righted">
    //       <Login redirect={redirect} setRedirect={setRedirect} />
    //     </div>

    //    </Route>

    //    <Route exact path="/signup">
    //    <div className="logingif">
    //       <img src="../page.png" width="600 px" height="480 px"></img>
    //     </div>
    //      <div className="logingif"> 
    //         <img src="../signupgif.gif" width="600 px" height="480 px"></img>
    //     </div>
    //     <div className="container" className="imagetitle">
    //     <div className="row">
    //       <div className="col">
    //       <img src="../logoclear.png" className="books"></img>
    //       </div>
    //       <div className="col">
    //       <h4 className="title">BookBit</h4>
    //       </div>
    //     </div>
    //     </div>
    //     <div className="righted">
    //       <Signup />
    //     </div>
    //    </Route>

    //    <Route exact path="/shelf" component={ShelfView} />

    //   </Switch>
    //   </div>

    // </Router>
    <ShelfView/>
  );
}

// function First() {
//   return (
//     <div>
//     <Login />
//     </div>
// );
// }

// function Sign() {
//   return (
//     <div>
//     <Signup />
//     </div>
// );

// function Sign() {
//   return (
//     <div>
//     <Signup />
//     </div>
// );



