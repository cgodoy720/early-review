import React from 'react';

const Child = ({ first, last }) => {
    return (
        <div>
            <p>{first} {last}</p>
        </div>
    );
};

export default Child;