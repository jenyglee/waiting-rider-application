import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, Pressable, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onClick}
          style={{
            paddingVertical: 20,
            paddingHorizontal: 40,
            backgroundColor: 'blue',
          }}>
          <Text style={{color: 'white'}}>Home Screen</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>Second</Text>
      </View>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>상세 화면</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈화면'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: '상세 화면'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
