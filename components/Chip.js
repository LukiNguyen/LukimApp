import React, { useContext,memo } from 'react';
import styleGlobal from '../assets/css/globalStyle'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'; 
import { TransferContext } from '../screens/TransferScreen/Context'; 
const ChipCustom = ({colors,value,filterTarget}) => {
    const transferContext = useContext(TransferContext) 
    return ( 
    <View style={{width:'100%'}}>
        {
            filterTarget === 'filterStatus' &&  
                    <TouchableOpacity  style={[styleGlobal.flexCenter,styles.boxChip,value === transferContext.optionStatus ? {backgroundColor:colors} : {backgroundColor:"transparent"}]}
                        onPress={() => { 
                            transferContext.setOptionStatus(value);
                        }}
                    >
                        <View style={[styles.chip,styles.boxChip,{width:'100%',borderColor:colors}]}>
                            <Text style={[styles.text,value === transferContext.optionStatus ? {color:"#fff"}: {color:colors}]}>{value}</Text>
                        </View>                    
                    </TouchableOpacity> 
        } 
         {
            filterTarget === 'filterTime' && 
            <TouchableOpacity  style={[styleGlobal.flexCenter,styles.boxChip,value === transferContext.optionTime ? {backgroundColor:colors} : {backgroundColor:"transparent"}]}
                onPress={() => { 
                    transferContext.setOptionTime(value);
                }}
            >
                <View style={[styles.chip,styles.boxChip,{width:'100%',borderColor:colors}]}>
                    <Text style={[styles.text,value === transferContext.optionTime ? {color:"#fff"}: {color:colors}]}>{value}</Text>
                </View>
            </TouchableOpacity> 
        } 
    </View>
);
};

export default memo(ChipCustom);

const styles = StyleSheet.create({
    boxChip: {
        borderRadius:10,
        
    },
    text: {
        fontSize:15,
    },
    chip: {   
        height:50,
        paddingTop: 5,
        paddingBottom:8,
        paddingHorizontal:5,
        borderRadius:10,  borderWidth:1, 
        width:'100%',
        textAlign:'center',
        textAlignVertical:'center',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
});
