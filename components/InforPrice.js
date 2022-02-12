import { StyleSheet, Text, View, Image } from "react-native";
import styleGlobal from "../assets/css/globalStyle";
import { formatMoney } from "../extensions/formatMoney";
import React from "react";

const InforPrice = ({
  data,
  colorTitle,
  hiddenName,
  hiddenPrice,
  colorBackground,
}) => { 
  return (
    <>
      <View>
        <View
          style={[
            styles.card,
            styleGlobal.flexBetween,
            { backgroundColor: colorBackground, paddingHorizontal: 20 },
          ]}
        >
          <View style={styles.logoLayout}>
            <View style={styles.flexFromLeft}>
              <Text style={[styles.code, { color: colorTitle }]}>
                {data.fullExchangeName}
              </Text>
              {hiddenName !== true && (
                <Text style={styles.name}>
                  {data.shortName.replace(/CÔNG TY CỔ PHẦN/gi, "CTCP")}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.flexFromRight}>
            {hiddenPrice !== true && (
              <Text style={[styles.price, { color: colorTitle }]}>
                {formatMoney(data.regularMarketPrice.raw)} VNĐ
              </Text>
            )}
            {data.regularMarketChangePercent.raw > 0 && (
              <Text style={(styles.status, styles.grow)}>+{Math.round((data.regularMarketChangePercent.raw + Number.EPSILON) * 100) / 100}%</Text>
            )}
            {data.regularMarketChangePercent.raw < 0 && (
              <Text style={(styles.status, styles.down)}>{Math.round((data.regularMarketChangePercent.raw + Number.EPSILON) * 100) / 100}%</Text>
            )}
            {data.regularMarketChangePercent.raw === 0 && (
              <Text style={(styles.status, styles.zero)}>{Math.round((data.regularMarketChangePercent.raw + Number.EPSILON) * 100) / 100}%</Text>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default InforPrice;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 13,
  },
  logoLayout: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  code: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 13,
    color: "#787b86",
  },
  flexFromRight: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 13,
    color: "green",
  },
  down: {
    color: "red",
  },
  grow: {
    color: "#06FF00",
  },
  zero: {
    color: "orange",
  },
});
