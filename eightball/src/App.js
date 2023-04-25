import React, { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    const inputVal = event.target.question.value;
    setQuestion(inputVal);
  }

  return (
    <div className="App">
      <h1>Eight Ball</h1>
      <p>Welcome to my simple Eight Ball application. <br/>Ask it a question and it will provide the answer you seek.</p>
      <h3>Your Question:</h3>
      <form onSubmit={handleSubmit}>
         <input name="question" type="text"></input>
         <button name="submit" type="submit">Go!</button>
      </form>
      {question ? <p>Question: '{question}'</p> : null}
      {answer ? <p className='answers'>Answer: '{answer}'</p> : null}
      <p><br/>My wisdom is final. Do what you will with this information.</p>
    </div>
  );
}

export default App;
