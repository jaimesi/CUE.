import React, { useState } from 'react';
import { questions } from '../data/questions';

const QuestionDisplay = ({ category }) => {
    const [currentQuestion, setCurrentQuestion] = useState(() =>
        getRandomQuestion(category, null)
    );

    function getRandomQuestion(category, excludeQuestion) {
        const categoryQuestions = questions[category];
        const filteredQuestions = categoryQuestions.filter(
            (question) => question !== excludeQuestion
        );

        // If only one question is available, return it (to avoid infinite loops)
        if (filteredQuestions.length === 0) {
            return excludeQuestion;
        }

        // Select a random question from the filtered list
        return filteredQuestions[
            Math.floor(Math.random() * filteredQuestions.length)
        ];
    }

    const handleNewQuestion = () => {
        setCurrentQuestion((prevQuestion) =>
            getRandomQuestion(category, prevQuestion)
        );
    };

    return (
        <div className="question-display">
            <p className="question">{currentQuestion}</p>
            <button onClick={handleNewQuestion}>New Question</button>
        </div>
    );
};

export default QuestionDisplay;