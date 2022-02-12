import React, {useContext,memo,useState, useEffect} from 'react'
import { StyleSheet, Text, View,Animated,Easing} from 'react-native';
import styleGlobal from '../../assets/css/globalStyle'
import { Button } from 'react-native-paper';
import { TransferContext } from './Context'; 
import ChipCustom from '../../components/Chip';
const Filter = ({colorText,colorChip,colorBackground}) => {
    const transferContext = useContext(TransferContext)
    const [animationSetting,setAnimationSetting] = useState({
      opacity: new Animated.Value(0), height: new Animated.Value(0)
    });
    const showContent = (show) => { 
      if(!show){
      Animated.timing(animationSetting.height, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false  // <-- neccessary
      }).start();
      Animated.timing(animationSetting.opacity, {
        toValue: 1,
        duration: 0,
        easing: Easing.linear,
        useNativeDriver: false  // <-- neccessary
      }).start()
      }
      else{
        Animated.timing(animationSetting.height, {
          toValue: 0,
          duration: 300, 
          useNativeDriver: false  // <-- neccessary
        }).start();
        Animated.timing(animationSetting.opacity, {
          toValue: 0,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: false  // <-- neccessary
        }).start()
      }
    };
    const maxHeight =animationSetting.height.interpolate({ 
      inputRange: [0, 1], 
      outputRange: [0, 500]  // <-- value that larger than your content's height
    }); 
    useEffect(() => {
      showContent(transferContext.showFilter)  
    },[transferContext.showFilter])  
    const listChipTime = ["Tất cả","Thành công","Thất bại","Chờ xử lý"].map((val,index) => {
      return <View style={[styles.item,{paddingRight: index % 2 ===0 ? 5 : 0 ,paddingLeft: index % 2 !==0 ? 5 : 0}]} key={index}>
              <ChipCustom colors={colorChip} value = {val} filterTarget={"filterStatus"} active={val === transferContext.optionStatus ? true : false} />
            </View>
    })
    const listChipStatus = ["Tất cả","Tháng 1","Tháng 2","Chờ xử lý"].map((val,index) => {
      return <View style={[styles.item,{paddingRight: index % 2 ===0 ? 5 : 0,paddingLeft: index % 2 !==0 ? 5 : 0}]} key={index}>
              <ChipCustom colors={colorChip} value = {val} filterTarget={"filterTime"} active={val === transferContext.optionTime ? true : false} />
            </View>
    }) 
  return (
    <> 
    <View style={[]}>
    <Animated.View style={{ opacity: animationSetting.opacity, height: maxHeight  }}>
      <View style={[styles.boxFillter,styleGlobal.p_2,styleGlobal.m_2,{backgroundColor:colorBackground,height: 450}]}> 
            <View style={[{height:180}]}> 
            <Text style={[styles.title,{color:colorText}]}>THEO TRẠNG THÁI</Text>
            <View style={[styles.container,styleGlobal.flexRow]}> 
              {listChipTime}
            </View>
            </View>
            <View  style={[{height:180}]}> 
            <Text style={[styles.title,{color:colorText}]}>THEO THÁNG</Text>
            <View style={[styles.container,styleGlobal.flexRow]}>
              {listChipStatus}
            </View>
            </View>
            <View style={[styles.container,styleGlobal.flexRow]}>
              <View style={[styles.item,{paddingRight:5}]}>
              <Button  
              mode="outlined" 
              onPress={() => {
                transferContext.setOptionTime("Tất cả");
                transferContext.setOptionStatus("Tất cả");
              }} 
              labelStyle={ (transferContext.optionStatus === "Tất cả" && transferContext.optionTime === "Tất cả") ?  {color:"#ffffff4a"} : {color:"#000"}}
              disabled={(transferContext.optionStatus === "Tất cả" && transferContext.optionTime === "Tất cả") ? true : false}
              style={(transferContext.optionStatus === "Tất cả" && transferContext.optionTime === "Tất cả") ? [styles.button,styleGlobal.flexCenter] : [styles.button,styleGlobal.flexCenter,{backgroundColor:colorChip}]}
              >
                Xóa bộ lọc
              </Button>
              </View>
              <View style={[styles.item,{paddingLeft:5}]}>
              <Button mode="contained" onPress={() => console.log([{optionTime:transferContext.optionTime},{optionStatus:transferContext.optionStatus}])} style={[styles.button,styleGlobal.flexCenter,{backgroundColor:colorChip}]}>
                Áp dụng
              </Button>
              </View> 
            </View>
            </View> 
            </Animated.View> 
          </View>
      </>
  );
};

export default memo(Filter);

const styles = StyleSheet.create({
    boxFillter: { 
        borderRadius:10,
    },
    title: { 
    marginBottom:10,
    },
    container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start'  
    },
    item: {
        width: '50%'  ,
        marginBottom:15, 
    }, 
    button: {
        height: 50, 
        borderRadius:10,
    }
});
