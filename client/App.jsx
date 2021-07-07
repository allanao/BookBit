import React from 'react';
import '../prettify.scss';
import Page from "../components/page.jsx";
import Login from "../components/login.jsx";
import Signup from "../components/signup.jsx";

function App() {
  return (
    <div>

      <div className="logingif">
        <img src="../page.png" width="600 px" height="480 px"></img>
      </div>

      <div className="logingif">
        <img src="../logingif.gif" width="600 px" height="480 px"></img>
      </div>

      <div class="container" className="imagetitle">
        <div class="row">
          <div class="col">
          <img src="../logoclear.png" className="books"></img>
          </div>
          <div class="col">
          <h4 className="title">BookBit</h4>
          </div>
        </div>
      </div>

      <div className="righted">
      <Page/>
      </div>
    </div>
  );

}

export default App;