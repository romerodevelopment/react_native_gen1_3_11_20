import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const Screen1 = ({navigation, route}) => {
  console.log(navigation, route);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text style={{color: colors.white}}>Volver a Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2', {nombre: 'Pokemon'})}>
        <Text style={{color: colors.white}}>Navegar a Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;
