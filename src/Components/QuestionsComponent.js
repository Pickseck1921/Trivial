import { useState } from "react";

let QuestionComponent = (props) =>{

        let {questions} = props;
        let [numberOfQuestions, setNumberOfQuestions] = useState(0)

        return (
            <div className="question">
                <div>
                    <h2>Question</h2>
                    <p id="questionText">{questions[numberOfQuestions].text}</p>
                    <ul class="options">
                        <li><button> {questions[numberOfQuestions].options[0]}</button></li>
                        <li><button class="buttom"> {questions[numberOfQuestions].options[1]}</button></li>
                        <li><button class="buttom"> {questions[numberOfQuestions].options[2]}</button></li>
                    </ul>
                </div>

            </div>
        )

}

export default QuestionComponent;