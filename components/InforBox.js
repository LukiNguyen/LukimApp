import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import styleGlobal from "../assets/css/globalStyle";
import InforPrice from "./InforPrice";
import ChartCustom from "./Chart";
import React from "react";

const InforBox = ({ data, colorTitle, colorBackground, colorDot }) => {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={[
            styleGlobal.flexLeft,
            { flexDirection: "row", marginRight: 40 },
          ]}
        >
          {data &&
            data.map((ele, index) => {
              return (
                <View
                  key={index}
                  style={
                    index !== data.length - 1
                      ? [styles.boxInfor, { backgroundColor: colorBackground }]
                      : [
                          styles.boxInfor,
                          { backgroundColor: colorBackground, marginRight: 0 },
                        ]
                  }
                >
                  <InforPrice
                    colorTitle={colorTitle}
                    data={ele}
                    hiddenName={true}
                    hiddenPrice={true}
                  />
                  <ChartCustom
                    colorBackground={colorBackground}
                    colorDot={colorDot}
                    dataInTenLabel={[ele]}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InforBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingLeft: 20,
  },
  boxInfor: {
    width: 150,
    height: 150,
    borderRadius: 15,
    backgroundColor: "orange",
    marginRight: 20,
    marginTop: 10,
  },
});
