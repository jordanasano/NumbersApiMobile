import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

/** Title and subtitle
 *
 * state:
 * -subtitle (str)
 *
 * props: none
 *
 * App -> Title
 */
const Title = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    'Bring meaning to your metrics and stories to your dates',
    'An API for interesting facts about numbers',
    'Bring your metrics and dates to life',
    'Let your metrics tell tales with our API of number facts',
    'What tales do your metrics tell?',
    'Let your statistics tell tales and dates come to life',
  ];

  useEffect(() => {
    function updateSubtitle() {
      if (taglineIndex < 5) {
        setTaglineIndex(taglineIndex + 1);
      } else {
        setTaglineIndex(0);
      }
    }
    setTimeout(updateSubtitle, 30000);
  });

  return (
    <>
      <Text style={styles.title}>NUMBERS API V2</Text>
      <Text style={styles.subtitle}>{taglines[taglineIndex]}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold'
  },
  subtitle: {
    fontSize:15,
    textAlign:'center',
  }
});

export default Title;
