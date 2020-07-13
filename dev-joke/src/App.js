import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Layout from './layout/LayoutHome';
import 'antd/dist/antd.css';
import { getMessages } from './utils';

function App() {

  const [messages, setMessages] = useState([]);
  const [isWriting, setIsWriting] = useState('Mario');
  const [myMessage, setMyMessage] = useState('');
  const [myMessages, setMyMessages] = useState([]);
  const [banning, setBanning] = useState(true);

  
  const sendMessage = () => {
    setMyMessages([...myMessages, { author: 'You', text: myMessage, last:true }]);
    setMyMessage('');
  }

  useEffect(() => {
    axios.get(`https://sv443.net/jokeapi/v2/joke/Programming`)
      .then(response => {
        setMessages(getMessages(response.data));
      })
  }, []);

  return (
    <div className="App">
      <Layout
        isWriting={isWriting}
        setIsWriting={setIsWriting}
        myMessage={myMessage}
        sendMessage={sendMessage}
        setMyMessage={setMyMessage}
        messages={messages}
        banning={banning}
        setBanning={setBanning}
        myMessages={myMessages}
      />
    </div>
  );
}

export default App;
