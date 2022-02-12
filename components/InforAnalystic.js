import { StyleSheet, Text, View ,Image } from 'react-native';
import styleGlobal from '../assets/css/globalStyle'  
import { formatMoney } from '../extensions/formatMoney'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const LineCustom = ({type,status, moneyTotal, date,colorTitle,backgroundColorIcon,colorIcon,backgroundColorLine}) => {
    return <View style={[styles.card,styleGlobal.flexBetween,{backgroundColor:backgroundColorLine}]}>
    <View style={styles.logoLayout}> 
        <View style={[styles.icon,{backgroundColor:backgroundColorIcon}]}>
            <Ionicons name="ios-wallet" size={30} color={colorIcon}/> 
            {
                type === "drawal" ? <MaterialCommunityIcons 
                                        name="transfer-down" 
                                        size={15} 
                                        color="#fff" 
                                        style={[styleGlobal.positionAbsolute,styles.arrowIcon]} /> : null  
            }
            {
                type === "send" ? <MaterialCommunityIcons 
                                        name="transfer-up" 
                                        size={15} 
                                        color="#fff" 
                                        style={[styleGlobal.positionAbsolute,styles.arrowIcon]} />  :null
            }
        </View>
        <View>
        <View style={[styleGlobal.flexLeft,styleGlobal.flexRow,{marginTop:-20}]}> 
                <Text style={[styles.code,{color:colorTitle,padding:0}]}>{type==='drawal' ? "Rút tiền" : "Gửi tiền"}</Text>   
            {
                status === "success" ? <Ionicons 
                                        name="checkmark-circle" 
                                        size={16} 
                                        color="#06FF00" 
                                        style={[styles.statusIcon]} />  : null
            }
            {
                status === "fails" ? <MaterialCommunityIcons 
                                        name="alert-rhombus" 
                                        size={15} 
                                        color="#FC4F4F" 
                                        style={[styles.statusIcon]} />  : null
            }   
        </View>
        <Text style={[styles.name,styleGlobal.positionAbsolute]}>{date}</Text> 
        <View>
        </View>
        </View>
    </View>
    <View style={styles.flexFromRight}> 
        <Text style={[styles.price,{color:colorTitle}]}>{formatMoney(moneyTotal)} VNĐ</Text>   
    </View>
</View>
}
const InforAnalystic = ({data,colorTitle,backgroundColorIcon,colorIcon,backgroundColorLine}) => { 
    let renderItem = data && data.map((ele,index) => { 
        return  <LineCustom 
                    type={ele.type} 
                    moneyTotal={ele.moneyTotal} 
                    date={ele.date} 
                    status={ele.status} 
                    colorTitle={colorTitle} 
                    colorIcon={colorIcon}
                    backgroundColorIcon={backgroundColorIcon} 
                    backgroundColorLine={backgroundColorLine}
                    key={index}
                /> 
    }) 
  return ( 
    <View style={{paddingHorizontal:20,}}>  
        {renderItem}
    </View>
  );
};

export default InforAnalystic;

const styles = StyleSheet.create({ 
    card: {   
        paddingVertical:13, 
    },
    icon :{  
        paddingLeft:10,
        paddingRight:6,
        paddingVertical:6,
        borderRadius:10,
        marginRight:10, 
    },
    arrowIcon: {  
        top: 17, 
        left: 11, 
        right: 0, 
        bottom: 0,  
    },
    statusIcon: {
        marginLeft:5, 
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
        top:15,
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
});
