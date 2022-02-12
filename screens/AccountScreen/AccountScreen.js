import * as React from 'react';
import { View, Text,StyleSheet,ScrollView, SafeAreaView } from 'react-native';
import CardMain from '../../components/CardMain'
import InforLine from '../../components/InforLine'
export default function AccountScreen({ navigation }) {
    let dataShow =[
        {
            title:"TS ròng TKCK",
            value:1200000,
        },
        {
            title:"Tổng tài sản",
            value:1200000,
        },
        {
            title:"Số dư tiền",
            value:1200000,
        },
        {
            title:"Giá trị CK",
            value:undefined,
        },
        {
            title:"Sức mua tối đa",
            value:undefined,
        },
        {
            title:"Chờ khớp",
            value:1200000,
        },
        {
            title:"Tiền có thể rút",
            value:1200000,
        },
        {
            title:"Tiền có thể ứng",
            value:undefined,
        },
    ] 
    return (  
        <View>
            <View style={styles.container}>
                <CardMain />
            </View>   
        <SafeAreaView  >
        <ScrollView  style={styles.boxContainer}>
            {
                dataShow.map((ele,index) => {
                    return  <InforLine title={ele.title} value={ele.value} stack={false} key={index}/>
                })
            }
            </ScrollView> 
            </SafeAreaView> 
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        padding:20,  
    },
});
