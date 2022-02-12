import React, { useContext } from 'react'
import { TouchableHighlight } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import InforLine from '../../components/InforLine';
import Icon from 'react-native-vector-icons/Feather';
const LanguageChooseScreen = (props) => {
    const settings = useContext(SettingContext) 
    const { colors } = props.theme;  
  return (
    <> 
        <TouchableHighlight onPress={() => settings.chooseLanguage('eng')} underlayColor="#ffffff00"> 
            <InforLine title="Tiếng Anh" value={'eng'}   icon = {settings.options.language==='eng' && <Icon name={'check'} size={20} color={colors.iconCheck}/>}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => settings.chooseLanguage('vie')} underlayColor="#ffffff00"> 
            <InforLine title="Tiếng Việt" value={'vie'}  icon = {settings.options.language==='vie' && <Icon name={'check'} size={20} color={colors.iconCheck}/>}/>
        </TouchableHighlight>
    </>
  );
};

export default withTheme(LanguageChooseScreen);
