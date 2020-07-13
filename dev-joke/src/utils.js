export const getMessages = joke => {
    switch (joke.type) {
      case 'single':
        return getSingleMessages(joke.joke);
      case 'twopart':
        return getTwoPartMessages(joke.setup, joke.delivery);
    }
  };

  const getSingleMessages = joke => {
    return [{ text: 'Would you like to hear a joke?', author: 'Mario', delay: 3000 },
    { text: 'If you insist', author: 'Luigi', delay: 6000 },
    { text: joke, author: 'Mario', delay: 9000, last:true },
    { removed:true, delay: 12000 },];
  };

  const getTwoPartMessages = (setup, delivery) => {
    let result = [{ text: setup, author: 'Mario', delay: 3000 },];
    if (setup.substr(setup.length - 1) === '?') {
      result.push({ text: 'I don\'t know', author: 'Luigi', delay: 6000 })
    }
    return result.concat([
      { text: delivery, author: 'Mario', delay: 9000, last:true },
      { removed:true, delay: 12000 },]);

  };
