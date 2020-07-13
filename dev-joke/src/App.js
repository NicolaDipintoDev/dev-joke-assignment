import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Layout from './layout/LayoutHome';
import 'antd/dist/antd.css';

function App() {

  const [messages, setMessages] = useState([]);
  const [isWriting, setIsWriting] = useState('Mario');

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
    return result.concat([
      { text: delivery, author: 'Mario', delay: 9000 },
      { text: 'removed', delay: 10000 },]);

  }

  useEffect(() => {
    axios.get(`https://sv443.net/jokeapi/v2/joke/Programming`)
      .then(response => {
        console.log(response);
        setMessages(getMessages(response.data));
      })
  }, []);

  return (
    <div className="App">
      <Layout
        isWriting={isWriting}
        setIsWriting={setIsWriting}
      />
    </div>
  );
}

export default App;
