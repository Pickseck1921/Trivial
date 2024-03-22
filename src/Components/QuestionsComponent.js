import { useState } from "react";

let QuestionComponent = (props) =>{

        let {questions, setPoints, points} = props;
        let [numberOfQuestions, setNumberOfQuestions] = useState(0)
        let [message, setMessage] = useState(null)


        let answerQuestion = (answer) =>{
            if (answer == questions[numberOfQuestions].answer) {
                setMessage ("Right answer")
                setPoints(points+1)
            } else {
                setMessage ("Wrong answer")
            }

            if(numberOfQuestions < questions.length-1){
                setNumberOfQuestions(numberOfQuestions+1)
                setTimeout(()=>{
                        setMessage (null)
                }, 2000)
            } else{

                setTimeout(()=> {
                    setMessage("Finish")
                },4000)


                setTimeout(()=> {
                    setPoints(0)
                    setNumberOfQuestions(0)
                },4000)
            }
        }
        return (
            <div className="question">
                {message != null &&
                <h2>{message}</h2>
                    }


                <div>
                    <h2>Question</h2>
                    <p id="questionText">{questions[numberOfQuestions].text}</p>
                    <ul class="options">
                        {questions[numberOfQuestions].options.map((option, i) =>
                           <li><button onClick={()=>{answerQuestion(i)}}> {option}</button></li> 
                        )}
                        
                    </ul>
                </div>

            </div>
        )

}

export default QuestionComponent;