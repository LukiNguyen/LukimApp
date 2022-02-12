import { StyleSheet, Text, View,Dimensions } from 'react-native'; 
import { formatMoney } from '../extensions/formatMoney';
import Icon from 'react-native-vector-icons/AntDesign';
import styleGlobal from '../assets/css/globalStyle'
const Width  = Dimensions.get("window").width;
import React from 'react';

const CardMain = () => {
  const profit = 2
  const rank = 'pro'
  return (
    <View style={[styles.card, styleGlobal.flexLeft,styleGlobal.flexColumn,{alignItems:"flex-start"}]}>
      <View style={[ styles.headerCard]}>
        <Text style={[styles.white, styles.title, styles.green]}>NGUYỄN HUY HOÀNG</Text>
        {
          rank === 'pro' && <Text style={[styles.profit, styles.pro]}>
                              <Text style={[styles.yellow]}>
                              {rank.toUpperCase()}
                              </Text>
                            </Text> 
        }
        {
          rank === 'normal' && <Text style={[styles.profit, styles.normal]}>
                                  <Text style={[styles.green]}>
                                    {rank.toUpperCase()}
                                  </Text>
                                </Text> 
        }

      </View>
      <Text style={[styles.white, styles.space]} >ID: 14122306</Text>
      <Text style={[styles.grey]}>Tài sản ròng (NAV)</Text> 
      <Text style={[styles.white, styles.title, styles.green]}>02</Text>
      <View style={[styleGlobal.flexBetween,styles.widthDe80]}>
        <View>
          <Text style={[styles.grey]}>Giá trị danh mục (VND)</Text> 
          <Text style={[styles.white, styles.title, styles.green]}>{formatMoney(100000000)}</Text>
        </View>
        <View>
          <Text style={[styles.grey]}>Lãi/Lỗ tạm tính</Text> 
          {
            profit > 0 && <View style={[styleGlobal.flexCenter]}>
                            <Icon 
                              name="caretup" 
                              size={10} 
                              color="#16bf93" 
                              style={{marginRight:5}}
                                />
                            <Text style={[styles.white, styles.title, styles.green]}>{profit}%</Text>
                          </View>
          }
          {
            profit < 0 && <View style={[styleGlobal.flexCenter]}>
                            <Icon 
                              name="caretdown" 
                              size={10} 
                              color="#e94361" 
                              style={{marginRight:5}}
                                />
                            <Text style={[styles.white, styles.title, styles.green]}>{profit}%</Text>
                          </View>
          }
          {
            profit === 0 && <Text style={[styles.white, styles.title, styles.zero]}>{profit}%</Text>
          }
        </View>
        {/* <View style={[styles.profit]}>
          <Text style={[styles.white]}>
            2,3%
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default CardMain;  
const styles = StyleSheet.create({ 
    space: {
      marginBottom:8,
    },
    card: {
        backgroundColor:'#1b242d',
        width:Width - 40,
        height:185,
        borderRadius:20,  
        padding:20,   
        paddingTop:20,
    },
    headerCard: {
      alignItems: "center",  
      justifyContent: "flex-start", 
      flexDirection: "row",
    },
    profit: {
      backgroundColor:'rgba(52, 52, 52, 0.8)', 
      paddingHorizontal:5,
      paddingVertical:2,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 5,
      marginLeft:10,
    },
    pro: {
      borderColor: "#caa44f",
    },
    normal: {
      borderColor: "#16bf93",
    },
    title: {
      fontSize:23, 
    },
    white: {
      color:'#FFFFFF',
    },
    green: {
      color:'#16bf93',
    },
    down: {
      color:'red',
    }, 
    zero: {
        color:'orange',
    },
    grey:{
      color:'#9698a4',
    },
    yellow: { 
      color:"#caa44f",
    },
    widthDe80: {
     width:Width - 80,
    }
});
