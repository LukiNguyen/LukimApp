import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import React,{useContext} from 'react'; 
import { withTheme } from 'react-native-paper';
import { TransferContext } from './Context'; 
import InfroAnalystic from '../../components/InforAnalystic'; 
import Filter from './Filter' 
const TransferScreen = ({theme}) => {
  const transferContext = useContext(TransferContext) 
  const {colors} = theme  
  return (
    <SafeAreaView  >
        <ScrollView  style={styles.boxContainer}> 
      <Filter colorText={colors.text} colorChip={colors.secondaryColor} colorBackground={colors.titleBoxBackgroundColor}/>
      <InfroAnalystic 
        colorTitle={colors.text} 
        colorIcon={colors.secondaryColor}
        data={transferContext.data} 
        backgroundColorIcon={colors.titleBoxBackgroundColor}
        backgroundColorLine={colors.background}
      />  
      </ScrollView> 
    </SafeAreaView> 
  );
};

export default withTheme(TransferScreen);

const styles = StyleSheet.create({
  
});
