import React, { useContext } from 'react'
import { View, Text,TouchableHighlight } from 'react-native'; 
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import InforLine from '../../components/InforLine';
import Icon from 'react-native-vector-icons/Feather';
const ModeThemeScreen = (props) => {
    const settings = useContext(SettingContext) 
    const { colors } = props.theme; 
    console.log(settings.options)
  return (
    <> 
        <TouchableHighlight onPress={() => settings.chooseTheme('light')} underlayColor="white"> 
            <InforLine title="Sáng" value={'light'}   icon = {settings.options.theme==='light' && <Icon name={'check'} size={20} color={colors.iconCheck}/>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => settings.chooseTheme('dark')} underlayColor="white"> 
            <InforLine title="Tối" value={'dark'}  icon = {settings.options.theme==='dark' && <Icon name={'check'} size={20} color={colors.iconCheck}/>}/>
        </TouchableHighlight>
    </>
  );
};

export default withTheme(ModeThemeScreen);
