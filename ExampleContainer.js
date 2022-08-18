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
    const categories = ['Math', 'Trivia', 'Date'];
    return (
        <>
            {categories.map((c, idx) => (
                <ExampleBox
                    key={idx}
                    category={c}
                    apiCall={apiCall}
                    updateWidget={updateWidget} />
            ))}
        </>
    );
};

export default ExampleContainer;
