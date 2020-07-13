import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const getMessages = joke => {
    switch (joke.type) {
      case 'single':
        return getSingleMessages(joke.joke);
      case 'twopart':
        return getTwoPartMessages(joke.setup, joke.delivery);
    }
  }

  const getSingleMessages = joke => {
    return [{ text: 'volete sentire una bellissima barzelletta?', author: 'Mario', delay: 3000 },
    { text: 'Vai spara', author: 'Luigi', delay: 6000 },
    { text: joke, author: 'Mario', delay: 9000 },
    { text: 'removed', delay: 9300 },];
  }

  const getTwoPartMessages = (setup, delivery) => {
    let result = [{ text: setup, author: 'Mario', delay: 3000 },];
    if (setup.substr(setup.length - 1) === '?') {
      result.push({ text: 'I don\'t know', author: 'Luigi', delay: 6000 })
    }
    result.concat([
      { text: delivery, author: 'Mario', delay: 9000 },
      { text: 'removed', delay: 10000 },]);
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
