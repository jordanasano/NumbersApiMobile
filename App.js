import React from 'react';
import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Documentation from './Documentation';
import FactContainer from './FactContainer';
import Title from './Title';

/**
 *Numbers API app
 *
 *state:none
 *props: none
 *
 *App -> FactContainer, Documentation, Title -> ExampleContainer, Socials, WidgetContainer
 */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView style={backgroundStyle}>
      <Title />
      <FactContainer />
      <Documentation />
    </ScrollView>
  );
};

export default App;
