import axios from 'axios';
import React, {useState} from 'react';
import {TextInput, Text, Alert} from 'react-native';
import styles from './App';
//TODO: npm i qs if using it
// import qs from 'qs';

/**Fact Form
 *
 * -state:
 * -factData (obj)
 *
 * -props:
 * -submitFact
 *
 * WidgetContainer -> FactForm
 */
// TODO: Finish and implement form for further study
const FactForm = ({submitFact, handleSubmitClick}) => {
  const [fact, setFact] = useState('');
  async function submitFact() {
    try {
      const url = 'http://numbersapi.com/submit';
      // Our post request isn't going through. data might not be formatted right
      const data = qs.stringify({
          text: 'new fact',
          number: '42',
          type: 'trivia',
        });

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      };
      await axios(options);
      
    } catch {
      Alert.alert(`Don't know how to open this URL:`);
    }
    handleSubmitClick();
  }
  return (
    <>
      <Text>Type in a number and a fact!</Text>
      <TextInput style={styles.input} onChangeText={setFact} value={fact} />
      <Text onPress={submitFact}>Submit your fact!</Text>
    </>
  );
};

export default FactForm;
