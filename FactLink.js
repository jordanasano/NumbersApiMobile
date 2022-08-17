import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';

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
    <>
      <Text style={styles.factLink} onPress={handlePress}>
        {path}
      </Text>
    </>
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
