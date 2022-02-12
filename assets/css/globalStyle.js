import { StyleSheet,Dimensions } from 'react-native';  
const Width  = Dimensions.get("window").width;  
export default StyleSheet.create({
  flexCenter: {
    alignItems: "center",  
    justifyContent: "center", 
    flexDirection: "row",  
  },
  flexLeft: {
    alignItems: "center",  
    justifyContent: "flex-start",  
    paddingVertical:10, 
  },
  flexRow: {
    flexDirection: "row",
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
  p_2: {
    padding:20,
  },
  pl_2: {
    paddingLeft:20,
  },
  py_2: {
    paddingVertical:20,
  },
  m_2: {
    margin:20,
  },
  positionAbsolute:{
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});