import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TabOne = props => {
  return (
    <View style={myStyle.container}>
      <Text>Tab One</Text>
    </View>
  );
};

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 6,
  },
});

export default TabOne;
