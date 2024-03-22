
import QuestionComponent from './Components/QuestionsComponent';
import './App.css';
import { useState } from 'react';
import PlayerInfoComponent from './Components/PlayerInfoComponent';

let App = () => {
  let[points, setPoints]= useState(0)

  let [questions, setQuestions] = useState ([
    {
      text : "¿Quién es la mejor actriz del mundo?",
      options: ["Chelo", "Marie Curie", "Meryl Streep"]
    },
    {
      text : "¿Cómo se llama la hija de Tania y Josh?",
      options: ["Eloise", "Viola", "Agustina"]
    },
    {
      text : "¿En qué año se fundó Pickseck?",
      options: ["1100", "2018", "1921"]
    },

  ])
  return (
    <div className="App">
     <PlayerInfoComponent points= {points}/>
     <QuestionComponent questions={questions} />
        
    </div>
  );
}

export default App;
