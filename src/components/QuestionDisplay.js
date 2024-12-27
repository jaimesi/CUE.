import React, { useState } from 'react';
import { questions } from '../data/questions'; // Import the questions.js file
import PageButton from './PageButton';

const QuestionDisplay = ({ category, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(
        getRandomQuestion(category)
    );

    function getRandomQuestion(category) {
        const categoryQuestions = questions[category];
        return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    }

    const handleNewQuestion = () => {
        setCurrentQuestion(getRandomQuestion(category));
    };

    return (
        <div className="question-display">
            <p className="question">{currentQuestion}</p>
            <button onClick={handleNewQuestion}>New Question</button>
        </div>
    );
};

export default QuestionDisplay;
