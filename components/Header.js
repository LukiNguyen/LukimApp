import { StyleSheet, Text, View, Image } from 'react-native'; 
import AvatarDefault from '../assets/avatardefault.png'
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}> 
        <View style={styles.headerLeft}>
            <View style={styles.avatar}>
                <Image source={AvatarDefault} style={{width: 40,height: 40}}/> 
            </View>
            <View style={styles.inforUser}>
                    <Text>NGUYEN HUY HOANG</Text> 
                <View style={styles.actions}>
                    <Text>+ 0898989799</Text> 
                </View>
            </View>
        </View>
        <View>
            <View style={styles.recharge}>
                <View style={styles.iconRightHeader}>
                    <Icon 
                        name="arrow-right-circle" 
                        size={20} 
                        color="#000"  />
                </View> 
            </View>
        </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        marginTop:20,
        marginBottom:20,
        marginHorizontal:20, 

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",  
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
