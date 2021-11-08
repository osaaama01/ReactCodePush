import React from 'react';
import {
  Text,
  View
} from 'react-native';

import codePush from 'react-native-code-push';

const App = () => {

  return (
    <View>
      <Text>
        Hello
      </Text>
    </View>
  );
};

export default codePush(App);
