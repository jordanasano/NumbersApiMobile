import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

/** ExampleBox
 *
 * state:
 * -factData (obj) like: {fact: '5 is great', path: '5/math'}
 * props:
 * -apiCall (func)
 * -updateWidget (func)
 * -category (str)
 *
 * ExampleContainer -> ExampleBox
 */

const ExampleBox = ({apiCall, category, updateWidget}) => {
  const [factData, setFactData] = useState({fact: null, path: null});

  const randomNum = Math.floor(Math.random() * 255);
  const baseURL = `http://numbersapi.com/`;
  let path = null;

  if (category === 'Math') {
    path = `${randomNum}/math`;
  } else if (category === 'Trivia') {
    path = `${randomNum}`;
  } else if (category === 'Date') {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    path = `${mm}/${dd}/date`;
  }

  /**
   * after mount, makes api call to get fact from db
   * updates state with fact and path
   */
  useEffect(() => {
    async function populateFact() {
      const response = await apiCall(baseURL + path);
      const fact = response.data;
      setFactData({fact: fact, path: path});
    }
    populateFact();
  }, []);

  /**
   * makes api call to get fact from db
   * updates state with fact and path
   * updates widget fact and path
   */
  function handlePress() {
    async function populateFact() {
      const response = await apiCall(baseURL + path);
      const fact = response.data;
      setFactData({fact: fact, path: path});
      updateWidget(fact, path);
    }
    populateFact();
  }

  //diplays loading icon on first render
  if (factData.fact === null) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <TouchableHighlight
        activeOpacity={0.2}
        underlayColor={Colors.lighter}
        onPress={handlePress}>
        <Text style={styles.url}>{baseURL + factData.path}</Text>
      </TouchableHighlight>
      <Text style={styles.fact}>{factData.fact}</Text>
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
  title: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 5,
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  url: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#649CDF',
  },
  fact: {
    margin: 5,
  },
});

export default ExampleBox;
