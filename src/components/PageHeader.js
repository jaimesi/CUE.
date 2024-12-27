import React from 'react';

const PageHeader = ({ text }) => {
    return (
        <div className="page-header">
        <h2>{text}</h2>
        </div>
    );
};

export default PageHeader;