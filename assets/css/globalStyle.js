import { StyleSheet,Dimensions } from 'react-native';  
const Width  = Dimensions.get("window").width;  
export default StyleSheet.create({
  flexCenter: {
    alignItems: "center",  
    justifyContent: "flex-start", 
    flexDirection: "row",  
  },
  flexLeft: {
    alignItems: "flex-start",  
    justifyContent: "flex-start", 
    flexDirection: "column",
    paddingVertical:10, 
  },
  flexBetween: {
    alignItems: "center",  
    justifyContent: "space-between", 
    flexDirection: "row", 
  },
  width100: {
    width:Width
  }, 
  bold: {  
    fontWeight:"bold"
  }, 
});