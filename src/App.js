import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import PageHeader from './components/PageHeader';
import CategoryButtons from './components/CategoryButtons';
import PageButton from './components/PageButton';
import Footer from './components/Footer';
import QuestionDisplay from './components/QuestionDisplay';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleContinue = () => {
      if (selectedCategory) {
          setCurrentPage('questions');
      }
  };

  const handleBack = () => {
      setCurrentPage('home');
      setSelectedCategory('');
  };

  return (
      <div className="app-container">
          <Header />
          {currentPage === 'home' && (
              <>
                  <PageHeader text="Select a Category:" />
                  <CategoryButtons setSelectedCategory={setSelectedCategory} />
                  <PageButton text="Continue →" handleClick={handleContinue} />
              </>
          )}
          {currentPage === 'questions' && (
              <>
                  <PageHeader text={selectedCategory} />
                  <QuestionDisplay category={selectedCategory} onBack={handleBack} />
                  <PageButton text="← Back" handleClick={handleBack} />
              </>
          )}
          <Footer />
      </div>
  );
}

export default App;