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

const Divider = () => <View style={myStyle.divider} />;

const MyCustomComponent = name => {
  return (
    <View>
      <Text style={myStyle.subtitle}>My name is {name.myName}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={myStyle.container}>
      <ScrollView contentContainerStyle={myStyle.scrollview}>
        <Image
          style={myStyle.regularimage}
          source={{
            uri: 'https://i.ibb.co.com/QMW6sFF/new-logo-b-01-transparent.png',
          }}
        />
        <Text style={myStyle.title}>Welcome to my react native.</Text>
        <MyCustomComponent myName="Yusuf Rizal" />
        <MyCustomComponent myName="Chaterine Silvia" />
        <TextInput
          style={myStyle.textinput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Please enter a number"
          keyboardType="numeric"
        />
        <Divider />
        <Button
          title="Open Secondary Screen"
          color="#f2673a"
          onPress={() => navigation.navigate('Secondary')}
        />
        <Button
          title="Press Me"
          color="#f2673a"
          onPress={() => {
            Alert.alert(
              'Message',
              'This is a message from button',
              [
                {
                  text: 'Other',
                  onPress: () => console.log('Other'),
                },
                {
                  text: 'Okay',
                  onPress: () => console.log('Okay'),
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel'),
                },
              ],
              {
                cancelable: false,
              },
            );
          }}
        />
        <Divider />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          praesentium tenetur voluptatum voluptates distinctio pariatur nam
          exercitationem dignissimos maxime reprehenderit? Fuga labore ullam
          nesciunt odit quod expedita quaerat numquam dolor?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const SecondaryScren = () => {
  return (
    <View style={myStyle.container}>
      <Text>Secondary Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Secondary" component={SecondaryScren} />
      </Stack.Navigator>
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
