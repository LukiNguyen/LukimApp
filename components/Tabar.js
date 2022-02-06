import * as React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import SettingsScreen from '../screens/SettingScreen/SettingsScreen';
import ModeThemeScreen from '../screens/SettingScreen/ModeThemeScreen';
import LanguageChooseScreen from '../screens/SettingScreen/LanguageChooseScreen';
import Policy from '../screens/SettingScreen/Policy';

//Screen names
const homeName = "Home";
const accountName = "Tài khoản";
const settingsName = "Cài đặt";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();  
function MainContainer(props) {
  const { colors } = props.theme; 
  return ( 
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor:colors.backgroundTabar,
        tabBarInactiveBackgroundColor:colors.backgroundTabar,
        tabBarActiveTintColor: colors.iconActive,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { paddingBottom: 0, fontSize: 10 }, 
        tabBarShowLabel: false ,  
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home';

          } else if (rn === accountName) {
            iconName = focused ? 'user' : 'user';

          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings';
          } 
          return <Icon name={iconName} size={23} color={color} />;
        },
      })}>
        <Tab.Screen name={homeName} component={HomeScreen}  options={{headerShown: false }}/> 
        <Tab.Screen name={accountName} component={AccountScreen}/>  
        <Tab.Screen name={settingsName}  options={{headerShown: false}}>
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name={"Thông tin cài đặt"} 
                component={SettingsScreen}
                options={{  headerTitleAlign: 'center', }}
              />
              <SettingsStack.Screen 
                name="Ngôn ngữ" 
                component={LanguageChooseScreen}
                options={{  headerTitleAlign: 'center', }} /> 
              <SettingsStack.Screen 
                name="Hiển thị"  
                component={ModeThemeScreen}
                options={{  headerTitleAlign: 'center', headerStyle: {
                  backgroundColor: colors.backgroundTabar}} }/>
              <SettingsStack.Screen 
                name="Chính sách" 
                component={Policy}
                options={{  headerTitleAlign: 'center', }} />
            </SettingsStack.Navigator>
          )}
          </Tab.Screen>
      </Tab.Navigator>  
  );
}

export default withTheme(MainContainer);