import React, { useRef } from 'react';
import {
  Alert,
  Pressable,
  Text,
  View
} from 'react-native';
import { token } from './constants';

import CodePush from 'react-native-code-push';
import { resolvePlugin } from '@babel/core';

const CodePushKey = "8doUS2crWs7eWSVW9PMPVT0yREPsqN6oW-dLP";

const Component1 = () => {

  const function1 = () => {
    Alert.alert("Alert", "This is function-1");
  }

  // const function2 = () =>
  // {
  //   Alert.alert("Alert","This is function-2");
  // }
  return (
    <View style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={function1}>
        <Text style={{ fontSize: 40, color: '#fff' }}>
          Component-1
        </Text>
      </Pressable>
    </View>
  );
}

const Component2 = () => {

   async function function2 () {
    var value = await CodePush.getUpdateMetadata().then((result) => {
      console.log("Description: " + result.label);
      return result.label;
    });
    console.log("Value: " + value);
    Alert.alert("Alert", "Staging Token value: " + value);
  }
  return (
    <View style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={function2}>
        <Text style={{ fontSize: 40, color: '#fff' }}>
          Component-2 with version 1.1
        </Text>
      </Pressable>
    </View>
  );
};


const App = () => {
  const check = 0
  if (check === 0)
    return <Component1 />
  else
    return <Component2 />
};

let codePushOptions = { deploymentKey: CodePushKey };

export default CodePush(codePushOptions)(App);
