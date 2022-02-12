import React, { useState,useContext, useEffect } from "react";
import {StyleSheet, Text, View, TouchableOpacity,  FlatList} from "react-native";
import styleGlobal from "../assets/css/globalStyle";
import { Swipeable } from "react-native-gesture-handler"; 
// import { SearchContext } from "../screens/SearchScreen/Context";
import InforPrice from "../components/InforPrice";
import Icon from "react-native-vector-icons/Feather";

export default function SwipperLine({ data, colorText, colorBackground }) { 
  const [listData, setListData] = useState([data]); 
  const renderLine = ({ item, index }, onClick) => { 
    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          keyExtractor={progress.toString()}
          style={{
            margin: 0,
            alignContent: "center",
            justifyContent: "center",
            width: 70,
          }}
        >
          <TouchableOpacity onPress={onClick}>
            <View style={[styleGlobal.flexCenter, styles.iconDelete]}>
              <Icon name="trash-2" size={25} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        rightOpenValue={-100}
        useNativeAnimations={true}
      >
        <InforPrice
          colorTitle={colorText}
          data={item}
          colorBackground={colorBackground}
          key={index}
        />
      </Swipeable>
    );
  };

  const deleteItem = ({ item, index }) => {
    let a = listData;
    a.splice(index, 1);
    setListData([...a]);
  }; 
  return (
    <View style={styles.container}> 
        <FlatList 
          data={listData}
          listKey={(item) => item.name.toString()}
          renderItem={(v) =>
            renderLine(v, () => {
              // console.log(v);
              deleteItem(v);
            })
          }
          keyExtractor={(item,index) => index.toString()} 
          ListEmptyComponent={''}
        />  
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    justifyContent:'space-between',
    flex:1,
  },
  iconDelete: {
    width: 50,
    height: 50,
    backgroundColor: "#FC4F4F",
    borderRadius: 10,
  },
});
