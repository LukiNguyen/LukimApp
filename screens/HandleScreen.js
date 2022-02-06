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
            <Tabar theme={theme}/>
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
