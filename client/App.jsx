import React, { Component, useState } from 'react';
import styles from '../prettify.scss';
// import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = { };
  }

//   getResults(data) {

//   }

  const handleClick = () => {
    axios('/auth', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log('Repsonse form login POST:', data));

    props.onClick();
  };
  



  render(){
      return(
      <div>
          <h2>WELCOME TO BOOKBIT: TESTING APP HANG</h2>
          <button onclick={handleClick}>Sign in with Github</button>
      </div>
      );
   }
}

export default App;