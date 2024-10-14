/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabOne from './pages/TabOne';
import TabTwo from './pages/TabTwo';
import TabThree from './pages/TabThree';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FirstScreen from './pages/FirstScreen';
import SecondScreen from './pages/SecondScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

// const HomeScreen = ({navigation}) => {
//   return (
//     <NavigationContainer independent={true}>
//       <Drawer.Navigator initialRouteName="FirstScreen">
//         <Drawer.Screen name="FirstScreen" component={FirstScreen} />
//         <Drawer.Screen name="SecondScreen" component={SecondScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// const Tab = createBottomTabNavigator();

// const SecondaryScreen = ({navigation}) => {
//   return (
//     <NavigationContainer independent={true}>
//       <Tab.Navigator
//         initialRouteName="TabOne"
//         screenOptions={{
//           activeTintColor: '#2e6298',
//           tabBarStyle: {position: 'absolute'},
//         }}>
//         <Tab.Screen
//           name="TabOne"
//           component={TabOne}
//           options={{
//             tabBarLabel: 'TabOne',
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="TabTwo"
//           component={TabTwo}
//           options={{
//             tabBarLabel: 'TabTwo',
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons name="bell" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="TabThree"
//           component={TabThree}
//           options={{
//             tabBarLabel: 'TabThree',
//             tabBarIcon: ({color, size}) => (
//               <MaterialCommunityIcons
//                 name="account"
//                 color={color}
//                 size={size}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const TertiaryScreen = ({navigation}) => {
//   return (
//     <View style={myStyle.container}>
//       <Text>Tertiary Screen</Text>
//       <Button
//         title="Back to Home"
//         color="#f2673a"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

const App = () => {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            //* headerTitle: () => <Text>Home Page</Text>,
            title: 'Home Page',
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#f2673a',
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button
                title="Info"
                color="#000000"
                onPress={() => {
                  console.log('Info button is pressed');
                }}
              />
            ),
            headerLeft: () => (
              <Button
                title="Home"
                color="#000000"
                onPress={() => {
                  console.log('Home button is pressed');
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Secondary"
          component={SecondaryScreen}
          options={{
            title: 'Secondary Page',
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#2e6298',
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Tertiary"
          component={TertiaryScreen}
          options={{
            title: 'Tertiary Page',
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#a8adf7',
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator> */}

      <Drawer.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{
          drawerType: dimensions.width >= 600 ? 'permanent' : 'front',
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}>
        <Drawer.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{drawerLabel: 'First Screen'}}
        />
        <Drawer.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{drawerLabel: 'Second Screen'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const myStyle = StyleSheet.create({
  scrollview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'blue',
    paddingTop: '36',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'grey',
  },
  regularimage: {
    width: 300,
    height: 150,
  },
  textinput: {
    height: 40,
    width: '100%',
    marginTop: 24,
    padding: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
  },
  divider: {
    marginVertical: 12,
    borderWidth: 2,
    borderColor: '#cccccc',
  },
});

export default App;
