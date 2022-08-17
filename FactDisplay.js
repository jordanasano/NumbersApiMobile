import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

/** Fact Display
 *
 * state:
 * -path (str)
 * props:
 * -widgetFact (str)
 * -apiCall (func)
 * -displayPath (str)
 * -updateWidget (func)
 *
 * WidgetContainer-> RandomFactLinks FactDisplay
 */

const FactDisplay = ({widgetFact, displayPath, updateWidget, apiCall}) => {
  const [path, setPath] = useState('');
  function updateWidgetOnChange(inputPath) {
    updateWidget(widgetFact, inputPath);
    setPath(inputPath);
  }

  async function getFact() {
    const baseURL = `http://numbersapi.com/`;
    if (path === '') {
      updateWidget(widgetFact, 'Enter valid path');
    } else {
      try {
        const response = await apiCall(baseURL + path);
        const fact = response.data;
        updateWidget(fact, path);
      } catch {
        updateWidget(widgetFact, 'Enter valid path');
      }
    }
  }

  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.baseUrl}>numbersapi.com/</Text>
      <TextInput
        style={styles.inputArea}
        onChangeText={updateWidgetOnChange}
        value={displayPath}
        onSubmitEditing={getFact}
      />
      <Text style={styles.fact}>{widgetFact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  widgetContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  inputArea: {
    backgroundColor: '#BEDAFC',
    fontSize: 20,
    fontWeight: 'bold'
  },
  baseUrl: {
    fontSize: 20,
    marginLeft: 10
  },
  fact: {
    fontSize: 20,
    margin: 10
  }
});

export default FactDisplay;
