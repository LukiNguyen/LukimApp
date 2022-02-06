import { StyleSheet, Text, View ,Image } from 'react-native';  
import { formatMoney } from '../extensions/formatMoney'; 
import React from 'react';

const InforPrice = () => {
    let informations = [
        {
            name:"CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT",
            code:"HPG",
            price:42200,
            percent:"0.12",
        },
        {
            name:"CÔNG TY CỔ PHẦN ĐẦU TƯ THẾ GIỚI DI ĐỘNG",
            code:"MWG",
            price:132500,
            percent:"0.76",
        },
        {
            name:"CÔNG TY CỔ PHẦN SỮA VIỆT NAM",
            code:"VNM",
            price:83100,
            percent:0,
        },  
         
    ] 
    let renderItem = informations.map((ele,index) => {
        return <View style={styles.card} key={index}>
        <View style={styles.logoLayout}> 
            <View style={styles.flexFromLeft}>
                <Text style={styles.code}>{ele.code}</Text>
                <Text style={styles.name}>{(ele.name).replace("CÔNG TY CỔ PHẦN",'CTCP')}</Text>
            </View>
        </View>
        <View style={styles.flexFromRight}>
            <Text style={styles.price}>{formatMoney(ele.price)} VNĐ</Text>
            {
                ele.percent > 0 && <Text style={styles.status, styles.grow}>+{ele.percent}%</Text>
            }
            {
                ele.percent < 0 && <Text style={styles.status , styles.down}>{ele.percent}%</Text>
            } 
            {
                ele.percent === 0 && <Text style={styles.status , styles.zero}>{ele.percent}%</Text>
            }
        </View>
    </View>
    }) 
  return ( 
    <View >  
        {renderItem}
    </View>
  );
};

export default InforPrice;

const styles = StyleSheet.create({
    logo: { 
        width:50, 
        height:50,
        borderRadius:15,
        marginRight:10, 
        backgroundColor: "#fff8ef",
    },
    card: { 
        alignItems: "center",  
        justifyContent: "space-between", 
        flexDirection: "row",
        backgroundColor: "#ffffff",  
        padding:13,  
        borderRadius:10, 
    },
    logoLayout: { 
        alignItems: "center",  
        justifyContent: "space-between", 
        flexDirection: "row",
    }, 
    code: {
        fontSize:18,
        fontWeight:"bold",
    },
    name: {
        fontSize:13, 
        color:"#787b86",
    },
    flexFromRight: {
        alignItems: "flex-end",  
        justifyContent: "flex-end", 
        flexDirection: "column",
    },
    price: {
        fontSize:16,
        fontWeight:"bold",
    },
    status: {
        fontSize:13, 
        color:"green",
    },
    down: {
        color:'red',
    },
    grow: {
        color:'green',
    },
    zero: {
        color:'orange',
    }
});
