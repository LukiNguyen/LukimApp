import { StyleSheet, Text, Dimensions } from 'react-native';
import {
  LineChart, 
} from 'react-native-chart-kit'
import React from 'react';

const Chart = () => {
  return (
    <LineChart
    data={{ 
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100, 
          ],
        },
      ],
    }}
    width={150} // from react-native
    height={150}  
    gutterSize={1}
    showOutOfRangeDays={false}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 0,
      color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`, 
    }}
    bezier  
  />
  );
};

export default Chart;

const styles = StyleSheet.create({});
