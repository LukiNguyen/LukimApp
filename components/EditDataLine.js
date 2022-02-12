import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext,useLayoutEffect } from "react";
import styleGlobal from "../assets/css/globalStyle";
import { SearchContext } from "../screens/SearchScreen/Context";
const EditDataLine = ({ data,colorTitle, borderColor }) => {
  const { dataFollow, setDataFollow } = useContext(SearchContext);
  const [actionStatus, setActionStatus] = React.useState(true);  
  useLayoutEffect(() => {
    setActionStatus(true)
    dataFollow.map((ele) => {
      if(ele.shortName === data.shortName) {
        setActionStatus(false)  
      }
      else {
        return
      } 
    }); 
  },[data.shortName])
  return (
    <View
      style={{
        borderBottomColor: borderColor,
        borderBottomWidth: 0.3,
        paddingHorizontal: 20,
      }}
    >
      <View style={[styleGlobal.flexBetween, styles.container]}>
        <View>
          <Text style={[styles.code, { color: colorTitle }]}>
            {data.fullExchangeName}
          </Text>
          <Text style={[styles.name]}>{data.shortName}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setActionStatus(!actionStatus);
              if (actionStatus) {
                setDataFollow((o) => [data, ...o]);
              } else {
                setDataFollow(
                  dataFollow.filter(
                    (item) => item.shortName !== data.shortName
                  )
                );
              }
            }}
            style={[
              styleGlobal.flexCsenter,
              styles.button,
              actionStatus
                ? { backgroundColor: "transparent" }
                : { backgroundColor: "#FC4F4F" },
            ]}
          >
            <Text
              style={[
                styles.textAction,
                actionStatus ? styles.textAdd : styles.textDelete,
              ]}
            >
              {actionStatus ? "Thêm" : "Xóa"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditDataLine;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  code: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 13,
    color: "#787b86",
  },
  textAction: {
    borderRadius: 20,
    borderWidth: 0.3,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 20,
  },
  textAdd: {
    borderColor: "#F76E11",
    color: "#F76E11",
  },
  textDelete: {
    borderRadius: 20,
    borderColor: "#FC4F4F",
    color: "#fff",
  },
});
