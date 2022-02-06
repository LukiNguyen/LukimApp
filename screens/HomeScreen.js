import React from "react";
import { StyleSheet,ScrollView, View,Text, SafeAreaView } from "react-native";
import { Dimensions } from 'react-native';
import Header from '../components/Header' 
import InforPrice from '../components/InforPrice'
import Tabar from "../components/Tabar";
const Height  = Dimensions.get("window").height; 
export default function App() {   
  return (
    <>
    <Header />   
        <SafeAreaView  >
        <ScrollView  style={styles.boxContainer}>
            {/* <View style={styles.options}>
               <CardMain />
            </View> */}
            <View style={styles.information}>  
                <Text style={styles.title}>MÃ CHỜ MUA</Text>
                <InforPrice />
                <Text style={styles.title}>MÃ CHỜ MUA</Text>
                <InforPrice />
                <Text style={styles.title}>MÃ CHỜ MUA</Text>
                <InforPrice />
                <Text style={styles.title}>MÃ CHỜ MUA</Text>
                <InforPrice />
                <Text style={styles.title}>MÃ CHỜ MUA</Text>
                <InforPrice />
            </View> 
        </ScrollView> 
        </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({
    container: { 
        paddingVertical:50, 
    }, 
    options: { 
        alignItems: "center",  
        justifyContent: "space-around", 
        flexDirection: "row", 
        paddingBottom:18, 
    },
    boxContainer:{ 
        backgroundColor: "#fff4eb",
        paddingVertical:10, 
        height:Height - 150 , 
    },
    title: {
        marginHorizontal:20,
        marginVertical:10,
        fontSize:18,
    },
    margintabbar: {
        paddingBottom:50,
    }
});
