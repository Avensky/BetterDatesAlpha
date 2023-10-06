
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../../constants/styles';
// screens
import Menu                     from '../../screens/Game/Menu';
import Date                     from '../../screens/Game/Date';

const Stack = createNativeStackNavigator();

export default function Navigator(props) {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: Colors.gray700,
                contentStyle: {backgroundColor: Colors.gray700}
            }}
        >
            {/* Game Selection Screen */}
            <Stack.Screen
                name="Menu"
                component={Menu}
                props={props}
                options={{
                    title: 'Menu'
                }}
            />
            {/* Date Game */}
            <Stack.Screen
                name="Date"
                options={{
                    title: 'Better Dates'
                }}
                component={Date}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};