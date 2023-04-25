import React, { useState } from 'react';
import './App.css';

//Input of Question & Creating Form Module
function InputQuestion(props) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //avoiding the default action
    props.onQuestionSubmit(question); //grabbing the current question value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="eightball-question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
      <button id="go-button" type="submit">Go!</button>
    </form>
  );
}

function App() {
  const [question, setQuestion] = useState('');

  const handleQuestionSubmit = (question) => {
    console.log(`setQuestion = ${question}`);
    setQuestion(question);
  };

  return (
    <div className="App">
      <h1>Eight Ball</h1>
      <p>
        Welcome to my simple Eight Ball application. <br />
        Ask it a question and it will provide the answer you seek.
      </p>
      <h3>Your Question:</h3>
      <InputQuestion onQuestionSubmit={handleQuestionSubmit} />
      <p>{question}</p>
    </div>
  );
}

export default App;
