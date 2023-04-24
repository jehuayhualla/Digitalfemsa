import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/Product';
import { ProductProps } from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Product: ProductProps;
};

export default function RootNav() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }