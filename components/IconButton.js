import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import styleGlobal from '../assets/css/globalStyle'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const IconButton = ({icon,describe,colorIcon,colorBackground}) => {
  return (  
    <View>
        <View style={[styles.iconButton,styleGlobal.flexCenter,{backgroundColor:colorBackground}]}>
        <Icon 
            name={icon}
            size={28} 
            color={colorIcon}  />
        </View>
        <Text style={[styles.describe,{color:colorIcon}]}>{describe}</Text>
    </View> 
  );
};

export default IconButton;

const styles = StyleSheet.create({
    iconButton: {
        width:60,
        height:60,
        borderRadius:20, 
    },
    describe: {
        fontSize:13,
        textAlign:'center',
        marginTop:8,
    },
});
