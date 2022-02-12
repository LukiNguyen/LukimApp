import { StyleSheet, Text, View, Image } from 'react-native'; 
import { withTheme } from 'react-native-paper';
import styleGlobal from '../assets/css/globalStyle'
import AvatarDefault from '../assets/avatardefault.png'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const Header = (props) => {
    const {colors} = props.theme;  
  return (
    <View style={[styles.header,styleGlobal.flexBetween,{backgroundColor:colors.thirdColor}]}> 
        <View style={styles.headerLeft}>
            <View style={styles.avatar}>
                <Image source={AvatarDefault} style={{width: 40,height: 40}}/> 
            </View>
            <View style={styles.inforUser}>
                    <Text style={{color:colors.text, fontWeight:"700"}}>NGUYEN HUY HOANG</Text> 
                <View style={styles.actions}>
                    <Text  style={{color:colors.text}}>+ 0898989799</Text> 
                </View>
            </View>
        </View>
        <View>
            <View style={styles.recharge}>
                <View style={styles.iconRightHeader}>
                    <Icon 
                        name="arrow-right-circle" 
                        size={20} 
                        color={colors.text}  />
                </View> 
            </View>
        </View>
    </View>
  );
};

export default withTheme(Header);

const styles = StyleSheet.create({
    header: { 
        paddingHorizontal:20, 
        paddingTop:20,
        paddingBottom:20, 
    },
    headerLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center", 
    },
    avatar: {
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'#fee5ca',
        padding:5,
    },
    inforUser: {
        fontWeight:'bold',
        marginLeft:10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center", 
    },
    recharge: {  
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },
    iconRightHeader: { 
        width:35, 
        height:35,
        borderRadius:11,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom:2,
    },
});
