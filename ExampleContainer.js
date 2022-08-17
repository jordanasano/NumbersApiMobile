import React from 'react';
import ExampleBox from './ExampleBox';

/** Example Container
 *
 * state: none
 * props:
 * -apiCall (func)
 * -updateWidget (func)
 *
 * FactContainer -> ExampleContainer -> ExampleBox
 */

const ExampleContainer = ({ apiCall, updateWidget }) => {
    const boxes = ['Math', 'Trivia', 'Date'];
    return (
        <>
            {boxes.map((b, idx) => (
                <ExampleBox 
                    key={idx} 
                    category={b} 
                    apiCall={apiCall} 
                    updateWidget={updateWidget} />
            ))}
        </>
    );
};

export default ExampleContainer;
