import { StyleSheet, Text, View } from 'react-native';
import { formatMoney } from '../extensions/formatMoney';  
import { withTheme } from 'react-native-paper';
import styleGlobal from '../assets/css/globalStyle'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const InforLine = (props) => {
  const { colors } = props.theme;  
  return (
    <View style={[styleGlobal.flexBetween ,styles.container, {borderBottomColor:colors.borderColor}]}> 
        <Text style={[styles.title, {color:colors.text}]}>{props.title}</Text> 
        {
          props.stack === false && <Text  style={[styles.title,styleGlobal.bold,styleGlobal.colorMains,{color:colors.text}]}>{props.value ? formatMoney(props.value) : "-"} <Text style={[styles.param]}>VNĐ</Text></Text>
        }
        {
          props.stack === true && <View style={[styleGlobal.flexCenter,styles.title,styles.grey]}>
                                    <Text style={[styles.title,styles.grey]}>{props.value}</Text>
                                    <View  style={{marginTop:5}}>
                                      <Icon name={'chevron-right'} size={20} color={'#939393'}/>
                                    </View>
                                  </View>
        }
        {
          props.icon !== "" && props.icon
        } 
    </View>
  );
};

export default withTheme(InforLine);

const styles = StyleSheet.create({ 
  container: {
    height:50, 
    paddingHorizontal:20, 
    borderBottomWidth:  0.3, 
  },
  title: {  
    fontSize:16,   
  },
  param: {
    fontSize:13,
    color:'#c2c0c0'
  },
  grey: {
    color:'#939393',
  },
});
