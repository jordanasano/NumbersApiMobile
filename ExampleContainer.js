import React from 'react';
import ExampleBox from './ExampleBox';

/** Example Container
 *
 * state: none
 * props:
 * -api call function
 *
 * FactContainer -> ExampleContainer -> ExampleBox
 */

const ExampleContainer = ({apiCall}) => {
  const boxes = ['Math', 'Trivia', 'Date'];
  return (
    <>
      {boxes.map((b, idx) => (
        <ExampleBox key={idx} category={b} apiCall={apiCall} />
      ))}
    </>
  );
};

export default ExampleContainer;
