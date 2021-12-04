import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/main/Login'
import Main from './screens/main/Main';
import Chat from './screens/main/Chat'
import VoiceSetting from './screens/voice/VoiceSetting';
import VoiceSettingDetail from './screens/voice/VoiceSettingDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="VoiceSetting" component={VoiceSetting} />
      <Stack.Screen name="VoiceSettingDetail" component={VoiceSettingDetail} />
      <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// <Stack.Screen name="Main" component={Main} />
// <Stack.Screen name="Message" component={SendMessage} /> 메시지 보내기 기능 */}
// <Stack.Screen name="Voice Setting" component={VoiceSetting} />
// <Stack.Screen name="Detail Setting" component={VoiceSettingDetail} />
