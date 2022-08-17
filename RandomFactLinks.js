import React from 'react';
import FactLink from './FactLink'

/** Random Fact Links
 *
 * state:
 * props:
 * -apiCall (func)
 * -updateWidget (func)
 *
 * WidgetContainer-> RandomFactLinks -> FactLink
 */

const RandomFactLinks = ({apiCall, updateWidget}) => {
  const paths = [
    'random/year',
    'random/math',
    'random/trivia',
    'random/date',
  ];
  return (
    <>
      {paths.map((p, idx) => (
        <FactLink
          key={idx}
          path={p}
          apiCall={apiCall}
          updateWidget={updateWidget}
        />
      ))}
    </>
  );
};


export default RandomFactLinks;
