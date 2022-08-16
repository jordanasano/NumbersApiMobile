import React from 'react';
import {Text, View} from 'react-native';

/** ExampleBox
 *
 * state: none
 * props:
 * -apiCall function
 * -category (str)
 *
 * ExampleContainer -> ExampleBox
 */

const ExampleBox = ({apiCall, category}) => {
  const randomNum = Math.floor(Math.random() * 255);
  let baseURL = `numbersapi.com/`;
  
  if (category === 'Math') {
      baseURL += `${randomNum}/math`;
    }
    if (category === 'Trivia') {
        baseURL += `${randomNum}`;
    }
    if (category === 'Date') {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      baseURL += `${mm}/${dd}/date`
  }
  async function populateFact(){ 
    return await apiCall(baseURL);
  }
  
  return (
    <View>
        <Text>{category}</Text>
        <Text onClick={handleClick}>{baseURL}</Text>

    </View>
  )
};

export default ExampleBox;
