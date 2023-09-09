import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingTabs = createMaterialBottomTabNavigator();

const Account = () => {
  return (
    <View style={style.tab}>
      <Text>Account</Text>
    </View>
  );
};
const Privacy = () => {
  return (
    <View style={style.tab}>
      <Text>Privacy</Text>
    </View>
  );
};
const Help = () => {
  return (
    <View style={style.tab}>
      <Text>Help</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      <SettingTabs.Navigator
        initialRouteName='Account'
        activeColor='#943a58'
        barStyle={{ backgroundColor: '#f5dae3' }}
      >
        <SettingTabs.Screen
          name='Account'
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account' color={color} size={26} />
            ),
          }}
        />
        <SettingTabs.Screen
          name='Privacy'
          component={Privacy}
          options={{
            tabBarLabel: 'Privacy',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='security' color={color} size={26} />
            ),
          }}
        />
        <SettingTabs.Screen
          name='Help'
          component={Help}
          options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='help' color={color} size={26} />
            ),
          }}
        />
      </SettingTabs.Navigator>
    </View>
  );
};

const style = StyleSheet.create({
  tab: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
