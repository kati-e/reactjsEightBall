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
      <p>Welcome to my simple Eight Ball application. <br/>Ask it a yes/no question and it will provide the answer you seek.</p>
      <h3>Your Question:</h3>
      <form id="myForm" onSubmit={handleSubmit}>
         <div className="myForm_inputs">
          <input className="input" name="question" type="text"></input>
          <button for="myForm" className="button" name="submit" type="submit">Go!</button>
         </div>
      </form>
      {question ? <p>Question: '{question}'</p> : null}
      {answer ? <p className='answers'>Answer: '{answer}'</p> : null}
      {question && answer ? <p><br/>My wisdom is final. Do what you will with this information.</p> : <p>Go ahead, ask your question.</p>}
    </div>
  );
}

export default App;
