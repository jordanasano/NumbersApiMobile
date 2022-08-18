import ExampleContainer from './ExampleContainer';
import WidgetContainer from './WidgetContainer';
import Socials from './Socials';
import React, {useState} from 'react';
import axios from 'axios';

/** Fact Container
 *
 * state:
 * -widgetFact (str)
 * -widgetPath (str)
 * props: none
 *
 * App-> Fact Container -> WidgetContainer, Socials, ExampleContainer
 */
const FactContainer = () => {
  const [widgetFact, setWidgetFact] = useState(
    '5 is the holy number of Discordianism, ' +
      'as dictated by the Law of Fives.',
  );
  const [widgetPath, setWidgetPath] = useState('5');

  /**
   * takes endpoint like: 'http://numbersapi.com/5/math'
   * returns promise of response object with key of data and value of fact (str)
   */
  async function apiCall(endpoint) {
    return await axios.get(endpoint);
  }

  /**
   * takes fact like: '5 is great' and path like: '5/math'
   * updates state for widget fact and path
   */
  function updateWidget(fact, path) {
    setWidgetFact(fact);
    setWidgetPath(path);
  }

  return (
    <>
      <ExampleContainer apiCall={apiCall} updateWidget={updateWidget} />
      <WidgetContainer
        apiCall={apiCall}
        updateWidget={updateWidget}
        widgetFact={widgetFact}
        widgetPath={widgetPath}
      />
      <Socials />
    </>
  );
};

export default FactContainer;
