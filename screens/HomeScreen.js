import React, { useContext, useMemo } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import { useSafeArea } from "react-native-safe-area-context";
import { withTheme } from "react-native-paper";
import { Dimensions } from "react-native";
import { SettingContext } from "../screens/SettingScreen/Context";
import { SearchContext } from "../screens/SearchScreen/Context";
import styleGlobal from "../assets/css/globalStyle";
import Modal from "react-native-modal";
import Header from "../components/Header";
import InforPrice from "../components/InforPrice";
import IconButton from "../components/IconButton";
import InforBox from "../components/InforBox";
import Icon from "react-native-vector-icons/Feather";

// Components
import SwipperLine from "../components/SwipperLine";

// ScreenSearch

import ScreenSearch from "../screens/SearchScreen/SearchScreen";
const Height = Dimensions.get("window").height;
function HomeScreen(props, { navigation }) {
  let informations = [
    {
      shortName: "CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT",
      fullExchangeName: "HPG",
      regularMarketChangePercent: {
        raw: 0.12,
      },
      regularMarketPrice: {
        raw: 42200,
      },
    },
    {
      shortName: "CÔNG TY CỔ PHẦN ĐẦU TƯ THẾ GIỚI DI ĐỘNG",
      fullExchangeName: "MWG",
      regularMarketChangePercent: {
        raw: 0.76,
      },
      regularMarketPrice: {
        raw: 132500,
      },
    },
    {
      shortName: "CÔNG TY CỔ PHẦN SỮA VIỆT NAM",
      fullExchangeName: "VNM",
      regularMarketChangePercent: {
        raw: 0,
      },
      regularMarketPrice: {
        raw: 83100,
      },
    },
    {
      shortName: "CMC INVESTMENT JSC",
      fullExchangeName: "CMC",
      regularMarketChangePercent: {
        raw: -1.61,
      },
      regularMarketPrice: {
        raw: 12200,
      },
    },
  ];
  let followData = [
    {
      shortName: "CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT",
      fullExchangeName: "HPG",
      regularMarketChangePercent: {
        raw: 0.12,
      },
      regularMarketPrice: {
        raw: 42200,
      },
      analystPrice: [20, 45, 28, 80, 99, 43, 50, 14, 12, 30, 35],
    },
    {
      shortName: "CÔNG TY CỔ PHẦN ĐẦU TƯ THẾ GIỚI DI ĐỘNG",
      fullExchangeName: "MWG",
      regularMarketChangePercent: {
        raw: 0.76,
      },
      regularMarketPrice: {
        raw: 132500,
      },
      analystPrice: [8, 12, 14, 15, 18, 14, 20, 23, 22, 25, 30],
    },
    {
      shortName: "CMC INVESTMENT JSC",
      fullExchangeName: "CMC",
      regularMarketChangePercent: {
        raw: -1.61,
      },
      regularMarketPrice: {
        raw: 12200,
      },
      analystPrice: [60, 45, 40, 55, 59, 63, 60, 45, 30, 35],
    },
  ];
  const { colors } = props.theme;
  const insets = useSafeArea();
  const { options } = useContext(SettingContext);
  const { showModal, setShowModal, dataFollow } = useContext(SearchContext);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.thirdColor }}>
        <StatusBar
          barStyle={options.theme === "dark" ? "light-content" : "dark-content"}
        />
        <Modal
          isVisible={showModal} 
          animationIn="slideInRight"
          animationOut="slideOutRight"
          backdropColor={colors.background}
          backdropOpacity={1}
          hideModalContentWhileAnimating={true}
          useNativeDriver={true} 
          style={[
            {
              flex: 1,
              justifyContent: "flex-start",
              padding: 0,
              marginHorizontal: 0,
            },
          ]}
        >
          {useMemo(() => (
            <ScreenSearch
              colorBackground={colors.titleBoxBackgroundColor}
              colorText={colors.text}
              borderColor={colors.borderColor}
            />
          ))}
        </Modal>
        <ScrollView
          horizontal={false}
          style={[
            styles.boxContainer,
            {
              backgroundColor: colors.thirdColor,
              paddingTop: insets.top - 50,
              paddingBottom: insets.bottom,
            },
          ]}
        >
          <Header />
          <View
            style={[
              styleGlobal.flexBetween,
              styleGlobal.p_2,
              {
                backgroundColor: colors.background,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              },
            ]}
          >
            <IconButton
              icon="download"
              describe="Rút tiền"
              colorBackground={colors.titleBoxBackgroundColor}
              colorIcon={colors.primaryColor}
            />
            <IconButton
              icon="upload"
              describe="Nạp tiền"
              colorBackground={colors.titleBoxBackgroundColor}
              colorIcon={colors.primaryColor}
            />
            <IconButton
              icon="credit-card"
              describe="Tài khoản"
              colorBackground={colors.titleBoxBackgroundColor}
              colorIcon={colors.primaryColor}
            />
            <TouchableHighlight
              onPress={() => navigation.navigate("Cài đặt")}
              underlayColor="#ffffff00"
            >
              <IconButton
                icon="clock"
                describe="Lịch sử"
                colorBackground={colors.titleBoxBackgroundColor}
                colorIcon={colors.primaryColor}
              />
            </TouchableHighlight>
          </View>
          <View
            style={[styles.information, { backgroundColor: colors.background }]}
          >
            <Text
              style={[styles.title, styleGlobal.pl_2, { color: colors.text }]}
            >
              ĐANG ĐẦU TƯ
            </Text>
            <InforBox
              colorTitle={colors.text}
              colorBackground={colors.titleBoxBackgroundColor}
              data={followData}
              colorDot={colors.primaryColor}
            />
          </View>
          <View
            style={[styleGlobal.py_2, { backgroundColor: colors.background }]}
          >
            <View style={[styleGlobal.flexBetween, { paddingHorizontal: 20 }]}>
              <Text style={[styles.title, { color: colors.text }]}>
                ĐANG THEO DÕI
              </Text>
              <TouchableHighlight
                onPress={() => setShowModal(true)}
                underlayColor="#ffffff00"
              >
                <View
                  style={[
                    styles.plusIcon,
                    { backgroundColor: colors.primaryColor },
                  ]}
                >
                  <Icon name="plus" size={20} color={"#fff"} />
                </View>
              </TouchableHighlight>
            </View>
            {informations.concat(dataFollow).map((ele, index) => {
              return (
                <SwipperLine
                  data={ele}
                  colorText={colors.text}
                  colorBackground={colors.background}
                  key={index}
                />
              );
            })}
          </View>
          <View
            style={[{ backgroundColor: colors.background, marginBottom: 20 }]}
          >
            <View style={[styleGlobal.flexBetween, { paddingHorizontal: 20 }]}>
              <Text style={[styles.title, { color: colors.text }]}>
                ĐANG CHỜ MUA
              </Text>
              <View
                style={[
                  styles.plusIcon,
                  { backgroundColor: colors.primaryColor },
                ]}
              >
                <Icon name="plus" size={20} color={"#fff"} />
              </View>
            </View>
            {informations.map((ele, index) => {
              return (
                <InforPrice colorTitle={colors.text} data={ele} key={index} />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default withTheme(HomeScreen);
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  options: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingBottom: 18,
  },
  boxContainer: {
    backgroundColor: "#fff4eb",
    height: Height - 50,
    zIndex: 90,
  },
  title: {
    marginBottom: 3,
    fontSize: 18,
  },
  margintabbar: {
    paddingBottom: 50,
  },
  plusIcon: {
    padding: 5,
    borderRadius: 10,
  },
});
