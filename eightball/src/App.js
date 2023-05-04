import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const questionRef = useRef(null);

  //Set the question value from the input
  function handleQuestionSubmit(event){
    event.preventDefault();
    const inputVal = event.target.question.value;
    setQuestion(inputVal);
    setAnswer('');
    questionRef.current.value = '';
  }

  //Get random eightball answer out of 0 - 7 different responses
  function generateAnswer() {
    let answer = '';
    let randomNum = Math.floor(Math.random() * 8);

    //Make an array of classic eightball answers
    const eightBallAnswers = [
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes'
    ];

    randomNum ? answer = eightBallAnswers[randomNum] : answer = 'ERROR. Issue with randomNum variable';

    setAnswer(answer);

  }

  //Reset all to restart the process for the user
  function resetAll() {
    setAnswer('');
    setQuestion('');
  }

  return (

    <div className="App">
      <h1>Eight Ball</h1>
      <p>Welcome to my simple Eight Ball application. <br/>Ask it a yes/no question and it will provide the answer you seek.</p>
      <h3>Your Question:</h3>
      <form id="myForm" onSubmit={handleQuestionSubmit}>
         <div className="myForm_inputs">
          <input className="input" name="question" type="text" ref={questionRef}></input>
          <button className="button" name="submit" type="submit">Go!</button>
         </div>
      </form>

      {/* if 'question' is not null */}
      {question ? <p>Question: '{question}'</p> : null}
      {question && !answer ? <button className="button" onClick={generateAnswer}>Generate Answer Now</button> : null}

      {/* if 'answer' is not null */}
      {answer ? <p className='answers'>Answer: '{answer}'</p> : null}
      {answer ? <p>My wisdom is final. Do what you will with this information.</p> : <p>Go ahead, ask your question.</p>}
      {answer ? <button className="button" onClick={resetAll}>Reset All</button> : null}
    </div>
  );
}

export default App;
