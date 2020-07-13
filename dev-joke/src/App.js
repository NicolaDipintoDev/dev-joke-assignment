import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const getMessages = joke => {
    let 
      switch(joke.type){
        case 'single':
          return getSingleMessages(joke.joke);
        case 'twopart':
          return getTwoPartMessages(joke.setup, joke.delivery);

      }
  }

  useEffect(() => {
    axios.get(`https://sv443.net/jokeapi/v2/joke/Programming`)
      .then(res => {
        console.log(res);
      })
  }, []);

  return (
    <div className="App">
      miao
    </div>
  );
}

export default App;
