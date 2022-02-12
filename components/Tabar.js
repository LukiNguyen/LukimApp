import * as React from 'react';  
import { Animated, Dimensions, Button, Platform,  TouchableOpacity, View,Pressable } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useRef,useContext } from 'react';
import { TransferContext } from '../screens/TransferScreen/Context'; 

// Screens
import HomeScreen from '../screens/HomeScreen';

// SettingScreen
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import SettingsScreen from '../screens/SettingScreen/SettingsScreen';
import ModeThemeScreen from '../screens/SettingScreen/ModeThemeScreen';
import LanguageChooseScreen from '../screens/SettingScreen/LanguageChooseScreen';
import InforVersion from '../screens/SettingScreen/InforVersion';
import Policy from '../screens/SettingScreen/Policy';

// TransferScreen
import TransferScreen from '../screens/TransferScreen/TransferScreen';

// Statistical
import StatisticalScreen from '../screens/StatisticalScreen/StatisticalScreen';

//Screen names
const homeName = "Home";
const accountName = "Tài khoản";
const settingsName = "Cài đặt";
const transferName = "Giao dịch";
const statisticalName = "Thống kê";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();  
function MainContainer(props) {
  const { colors } = props.theme; 
  const transferContext = useContext(TransferContext) 
  const tabOffsetValue = useRef(new Animated.Value(0)).current; 
  return ( <>
      <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false ,   
        // Floating Tab Bar...
        tabBarStyle: {
          backgroundColor: colors.titleBoxBackgroundColor,
          position: 'relative',
          bottom: 0,
          marginHorizontal: 0,
          // Max Height...
          height: 60, 
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 0,
        }
      }}>
 
        <Tab.Screen name={homeName} component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => ( 
              <Icon
                name="home"
                size={20}
                color={focused ? colors.primaryColor : 'gray'}
              ></Icon> 
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: -3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={transferName} component={TransferScreen} options={{
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() =>{
                transferContext.setShowFilter(!transferContext.showFilter)
            }}>
              {transferContext.showFilter ? <MaterialCommunityIcons name="filter-outline" size={30} color={colors.primaryColor} style={{ marginRight: 15}}/> : <Icon name="x-circle" size={30} color={colors.primaryColor} style={{ marginRight: 15}}/>}
              
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => ( 
              <Icon
                name="clipboard"
                size={20}
                color={focused ? colors.primaryColor : 'gray'}
              ></Icon> 
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => { 
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() + 8 ,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={statisticalName} component={StatisticalScreen} options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ navigation,focused }) => (  
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: colors.primaryColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Icon
                name="pie-chart"
                size={25}
                color={'#fff'}
              ></Icon>
              </View> 
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => { 
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()  * 2 + 17.5,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={accountName} component={AccountScreen} options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => ( 
              <Ionicons
                name="ios-wallet-outline"
                size={20} 
                color={focused ? colors.primaryColor : 'gray'}
              ></Ionicons> 
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3 + 28,
              useNativeDriver: true
            }).start();
          }
          
        })}>
           

        </Tab.Screen>

        <Tab.Screen name={settingsName}  options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => ( 
              <Icon
                name="settings"
                size={20}
                color={focused ? colors.primaryColor : 'gray'}
              ></Icon> 
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4 + 38,
              useNativeDriver: true
            }).start();
          }
        })}>
          {() => (
                  <SettingsStack.Navigator>
                    <SettingsStack.Screen
                      name={"Cài đặt chung"} 
                      component={SettingsScreen}
                      options={{  headerTitleAlign: 'center', }}
                    />
                    <SettingsStack.Screen 
                      name="Ngôn ngữ" 
                      component={LanguageChooseScreen}
                      options={{  headerTitleAlign: 'center',headerTintColor: '#fff', }} /> 
                    <SettingsStack.Screen 
                      name="Hiển thị"  
                      component={ModeThemeScreen}
                      options={{  headerTitleAlign: 'center',headerTintColor: '#fff', headerStyle: {
                        backgroundColor: colors.backgroundTabar}} }/>
                    <SettingsStack.Screen 
                      name="Chính sách" 
                      component={Policy}
                      options={{  headerTitleAlign: 'center', }} />
                    <SettingsStack.Screen 
                      name="Thông tin phiên bản" 
                      component={InforVersion}
                      options={{  headerTitleAlign: 'center',headerTintColor: '#fff' }} />
                  </SettingsStack.Navigator>
            )}

        </Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 25,
        height: 2,
        backgroundColor: colors.primaryColor,
        position: 'absolute',
        bottom: 58, 
        left: 20,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
      </>
  );

}
function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 50

  // Total five Tabs...
  return width / 5
} 
export default withTheme(MainContainer); 