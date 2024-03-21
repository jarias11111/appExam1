import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import inicio from '../screens/inicio';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Principal">
            <Stack.Screen name="Principal" component={inicio} />
            {/* Aquí se pueden agregar más pantallas a medida que se crean */}
        </Stack.Navigator>
    );
};
export default AppNavigator;