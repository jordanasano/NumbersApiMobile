import React from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

/**Fact Link
 *
 * -state: none
 * -props:
 * -path (str)
 * -apiCall (func)
 * -updateWidget (func)
 *
 * RandomRactLinks -> FactLink
 *
 */
const FactLink = ({path, apiCall, updateWidget}) => {
  const baseURL = 'http://numbersapi.com/';

  /**
   * makes api call for fact from db
   * updates the widget with new fact and path
   */
  async function handlePress() {
    const response = await apiCall(baseURL + path);
    const fact = response.data;
    updateWidget(fact, path);
  }

  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.2}
        underlayColor={Colors.lighter}
        onPress={handlePress}>
        <Text style={styles.factLink}>{path}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  factLink: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#649CDF',
  },
});

export default FactLink;
