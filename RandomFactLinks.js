import React from 'react';
import FactLink from './FactLink';
import {View, StyleSheet} from 'react-native';

/** Random Fact Links
 *
 * state: none
 * props:
 * -apiCall (func)
 * -updateWidget (func)
 *
 * WidgetContainer-> RandomFactLinks -> FactLink
 */

const RandomFactLinks = ({apiCall, updateWidget}) => {
  const paths = ['random/year', 'random/math', 'random/trivia', 'random/date'];

  return (
    <View style={styles.container}>
      {paths.map((p, idx) => (
        <FactLink
          key={idx}
          path={p}
          apiCall={apiCall}
          updateWidget={updateWidget}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 5,
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
  },
});

export default RandomFactLinks;
