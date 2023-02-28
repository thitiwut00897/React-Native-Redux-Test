import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import Login from '../screen/Login';
import Register from '../screen/Register';
import { Provider } from 'react-redux';
import { Store } from '../redux/store';


function Navigation() {
    function StackNavigetion() {
        const StackAuth = createNativeStackNavigator()
        return (
            <StackAuth.Navigator screenOptions={{ headerShown: false }}>
                <StackAuth.Screen name='Login' component={Login} />
                <StackAuth.Screen name='Register' component={Register} options={{ headerTitleAlign: 'center' }} />
            </StackAuth.Navigator>
        )
    }
    function TabNavigation() {
        const Tab = createBottomTabNavigator()

        return (

            <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='StackLogin' component={StackNavigetion} />
            </Tab.Navigator>

        )
    }
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </Provider>
    )
}



export default Navigation;