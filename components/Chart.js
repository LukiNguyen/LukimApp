import { StyleSheet, Text, View,Dimensions } from 'react-native'; 
import {LineChart } from "react-native-chart-kit";
import React from 'react'; 
import PropTypes from 'prop-types';

const Chart = (props) => {
  const { onResponderTerminationRequest, onResponderTerminate,onResponderMove,dataInTenLabel, ...finalProps } = props;
    const line = {
        labels: ['1', '2', '3', '4', '5', '6','7','8', '9', '10'],
        datasets: [
          {
            data: dataInTenLabel[0].analystPrice,
            strokeWidth: 2, // optional 
            hideLegend:true , 
            segments:0,
          },
        ],
      }; 
  return (
    <View > 
    <LineChart onStartShouldSetResponderCapture={() => true}  
    onStartShouldSetResponder={(e) => {
      /*do whatever*/;
      return true
  }}
    {...finalProps}
    data={line}
    width={150}
    height={80}
    withInnerLines={false}
    withOuterLines={false}
    withVerticalLines={false}
    withVerticalLabels={false}
    withHorizontalLabels={false}
    fillShadowGradientOpacity={0.5}
    hidePointsAtIndex={[0,1,2,3,4,5,6,7,8,9]} 
    yAxisLabel={''}
    chartConfig={{ 
      backgroundGradientFrom:props.colorBackground,
      backgroundGradientTo:props.colorBackground,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 15,
      }, 
    }}
    getDotColor={(dataPointIndex) => {
      if (dataPointIndex === 0) {
      return 'transparent';
      }
      return props.colorDot;
      }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      paddingRight:0,
      paddingLeft:0,
    }}
  ></LineChart> 
</View> 
  );
};

export default Chart;
Chart.propTypes = {
  onResponderTerminationRequest: PropTypes.func
};
const styles = StyleSheet.create({});
