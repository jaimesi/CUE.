import React, { useState } from 'react';

const categories = [
    { title: 'Just Friends', description: 'Explore questions that help you understand the deeper aspects of your friendships, from meaningful memories to the qualities that make your bond unique and lasting.' },
    { title: 'Discovering', description: 'Learn about each other\'s values, dreams, and experiences, setting the foundation for building a strong, authentic connection.' },
    { title: 'Dating', description: 'Dive into questions that encourage reflection on love, vulnerability, and the qualities you seek in a partner, helping you understand each other\'s emotional landscape.' },
    { title: 'Long-Term Partners', description: 'Strengthen your relationship by discussing deep topics about personal growth, resilience, and shared dreams, and explore what makes your partnership strong and lasting.' },
    { title: 'Family', description: 'Foster understanding and connection within your family with questions that invite sharing personal stories, values, and life lessons that shape who you are.' },
    { title: 'Professional', description: 'Discuss meaningful topics about career growth, ambitions, and work-life balance, allowing you to connect on a deeper level beyond professional accomplishments.' },
    { title: 'Casual', description: 'Casual yet insightful questions that spark meaningful conversation about personal beliefs and experiences, helping you find common ground even in informal settings.' },
];

const CategoryButtons = ({ setSelectedCategory }) => {
    // Set default active category to "Just Friends"
    const [activeCategory, setActiveCategory] = useState(categories[0].title);

    // Update parent when component mounts
    React.useEffect(() => {
        setSelectedCategory(categories[0].title);
    }, [setSelectedCategory]);

    const handleClick = (category) => {
        setActiveCategory(category);
        setSelectedCategory(category);
    };

    return (
        <div className="category-buttons-container">
            <div className="category-buttons">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-button ${activeCategory === category.title ? 'active' : ''}`}
                        onClick={() => handleClick(category.title)}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
            {activeCategory && (
                <div className="category-description">
                    {categories.find((cat) => cat.title === activeCategory).description}
                </div>
            )}
        </div>
    );
};

export default CategoryButtons;