import React,{useContext} from 'react';
import { View,TouchableHighlight } from 'react-native';
import { SettingContext } from './Context'; 
import ActionLine from '../../components/ActionLine';
import InforLine from '../../components/InforLine'; 
export default function SettingsScreen({ navigation }) { 
    const settings = useContext(SettingContext) 
    return (
        <View>
        <TouchableHighlight onPress={() => navigation.navigate('Ngôn ngữ')} underlayColor="white">  
            <InforLine 
                title="Ngôn ngữ" 
                value={
                    settings.options.language ==='vie' ? 'Tiếng Việt' : 'Tiếng Anh'
                } 
                stack={true}/> 
        </TouchableHighlight>
        
        <TouchableHighlight onPress={() => navigation.navigate('Hiển thị')} underlayColor="white">  
            <InforLine 
                title="Hiển thị"    
                value={
                    settings.options.theme ==='light' ? 'Sáng' : 'Tối'
                }
                stack={true}
            /> 
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Profile')} underlayColor="white">  
            <ActionLine title="Chế độ" value={1200000}  /> 
        </TouchableHighlight>
        </View>
    );
}