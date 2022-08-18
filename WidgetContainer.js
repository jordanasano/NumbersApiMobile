import React from 'react';
import { StyleSheet, View } from 'react-native';
import FactDisplay from './FactDisplay';
import RandomFactLinks from './RandomFactLinks';

/** Widget Container
 *
 * state: none
 * props:
 * widgetFact (str)
 * widgetPath (str)
 * apiCall (func)
 * updateWidget (func)
 *
 * FactContainer -> WidgetContainer-> RandomFactLinks FactDisplay
 */

const WidgetContainer = ({ widgetFact, widgetPath, apiCall, updateWidget }) => {
  return (
    <View>
      <RandomFactLinks apiCall={apiCall} updateWidget={updateWidget} />
      <FactDisplay
        widgetFact={widgetFact}
        widgetPath={widgetPath}
        updateWidget={updateWidget}
        apiCall={apiCall}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  randomFactLinks: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
  },
});
export default WidgetContainer;
