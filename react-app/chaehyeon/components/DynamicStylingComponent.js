import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import dataString from './shortDataExample'; 

const DynamicStylingComponent = ({ inputStyle }) => {

  const style = JSON.parse(inputStyle);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={style}>

      <Text>{dataString}</Text>
            
            </View>
    </ScrollView>
  );
};

export default DynamicStylingComponent;
