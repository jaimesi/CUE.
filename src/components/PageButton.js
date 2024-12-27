import React from 'react';

const PageButton = ({ text, handleClick }) => {
    return (
        <div className="page-button">
        <button onClick={handleClick}>{text}</button>
        </div>
    );
};

export default PageButton;