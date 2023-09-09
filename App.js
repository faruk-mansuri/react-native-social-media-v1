import 'react-native-gesture-handler';
// stack navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// drawer navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home, Profile, Settings } from './Pages';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// font
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* Stack Navigator */}
      {/* <Stack.Navigator
        initialRouteName='Home'
        // screenOptions={{ header: () => null, headerShown: false }}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator> */}

      {/* Drawer Navigator */}
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Settings' component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
