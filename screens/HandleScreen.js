import React,{ useEffect, useContext } from 'react' 
import { View,StyleSheet,ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { useUserActions } from '../hook/useUserActionsContext';  
import { UserContext } from '../screens/UserConfirm/Context';
import { checkStorageUser } from '../actions/UserActions'

import RootScreen from '../screens/UserConfirm/RootScreen'; 
import Tabar from "../components/Tabar"; 

import { SettingContext } from '../screens/SettingScreen/Context';  
import TransferProvider from '../screens/TransferScreen/Context';
 

const HandleScreen = () => {
  const { options } = useContext(SettingContext);    
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      iconActive: '#1b242d',
      iconCheck:"#000",
      borderColor:"#e6e6e6",
      titleBoxColor:"#939393",
      titleBoxBackgroundColor:"#f3f3f3",
      primaryColor:"#F76E11",
      secondaryColor:"#FF9F45",
      thirdColor:"#FFBC80",
      fourColor:"#FC4F4F",
    }, 
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      backgroundTabar: '#1a1a1a',
      background: '#212023',
      text: '#ffffff',
      iconActive: '#fff',
      iconCheck:"#f5f5f5",
      borderColor:"#353333",
      titleBoxColor:"#939393",
      titleBoxBackgroundColor:"#2d2c31", 
      primaryColor:"#F76E11",
      secondaryColor:"#FF9F45",
      thirdColor:"#2d2c31",
      fourColor:"#FC4F4F",
    }, 
  }
  const theme = options.theme ==="dark" ? CustomDarkTheme : CustomDefaultTheme;
  const { userName, isLoading,isUser } = useContext(UserContext) 
  const { login,logout } = useUserActions() 
  const dataUser = ['lukim','admin']
  useEffect(() => {
    setTimeout( async () => {  
      await checkStorageUser('userToken').then(data => {
        if(dataUser.includes(data,0)) { 
            login({
              userName:"lukim",
              passWord:"lukim"
            })
        }
        else {
           logout()
        } 
      }) 
            
    }, 1000); 
  }, [userName]); 
  if( isLoading ) {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large"  color="#1b242d"/>
          </View>
        );
  }
  return (
    <>
    <PaperProvider   theme={theme}>
        <NavigationContainer  theme={theme} >
        { 
          isUser ? ( 
            <TransferProvider> 
              <Tabar theme={theme}/>
            </TransferProvider>
          )
          :
            <RootScreen/> 
        }
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default HandleScreen;

const styles = StyleSheet.create({});
