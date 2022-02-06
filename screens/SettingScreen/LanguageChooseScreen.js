import React, { useContext } from 'react'
import { View, Text,TouchableHighlight } from 'react-native';
import { SettingContext } from './Context'; 
import InforLine from '../../components/InforLine';
import Icon from 'react-native-vector-icons/Feather';
const LanguageChooseScreen = () => {
    const settings = useContext(SettingContext) 
  return (
    <> 
        <TouchableHighlight onPress={() => settings.chooseLanguage('eng')} underlayColor="white"> 
            <InforLine title="Tiếng Anh" value={'eng'}   icon = {settings.options.language==='eng' && <Icon name={'check'} size={20} color={'#000'}/>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => settings.chooseLanguage('vie')} underlayColor="white"> 
            <InforLine title="Tiếng Việt" value={'vie'}  icon = {settings.options.language==='vie' && <Icon name={'check'} size={20} color={'#000'}/>}/>
        </TouchableHighlight>
    </>
  );
};

export default LanguageChooseScreen;
