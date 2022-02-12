import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react'; 
export default function Option(props) {
  return (
    <View style={styles.square}>
        <View style={styles.layoutImage}>
            <Image source={props.image} alt='/' style={{width: 45,height: 45}}/>    
        </View>
        <Text style={styles.active}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    square: { 
        width: 95,
        height: 90,
        borderRadius:20,

        margin: 4,

        flexDirection: "column", 
        justifyContent: "space-between",
        alignItems: "center", 
    },
    layoutImage: {
        backgroundColor: "#edf2fc",

        width:60,
        height:60,
        borderRadius:30,

        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",

        marginBottom:8,
    },
    active: {
        fontWeight: "bold",   
    }
});
