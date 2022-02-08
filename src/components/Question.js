import React, { useState, useEffect } from "react";

function Question({ question, onAnswered}) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [keepGoing, setGo] = useState(true)

  // add useEffect code
useEffect(()=>{
  const timeout = setTimeout(()=>{
    setTimeRemaining(()=>timeRemaining-1)
  }, 1000)

  if(timeRemaining === 0){
    onAnswered(false)
    setTimeRemaining(10)
  }

  if((id === 6)&&(timeRemaining === 0)){
    setGo(false)
    clearTimeout(timeout)
  }

  return function clearTimeout() {
    console.log("cleared")
    clearInterval(timeout)
  }
  
},[timeRemaining, keepGoing])


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
