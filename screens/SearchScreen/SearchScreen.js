import { StyleSheet, Text,Platform,TextInput, View, Dimensions, TouchableHighlight,FlatList, SafeAreaView, ScrollView } from 'react-native' 
import React,{useState,useContext,useLayoutEffect,memo} from 'react'  
import styleGlobal from '../../assets/css/globalStyle'
import { SearchContext } from '../../screens/SearchScreen/Context';
import { searchData } from '../../extensions/searchData';
import Icon from 'react-native-vector-icons/Feather';
import EditDataLine from '../../components/EditDataLine'; 
const SearchScreen = ({colorBackground,colorText,borderColor}) => {
  const [keySearch, setKeySearch] = useState('');
  const targetSearch = ["fullExchangeName",'shortName']
  const { setShowModal,data,dataFollow } = useContext(SearchContext) 
  useLayoutEffect(() => {
    dataFollow.map(ele => {
      if(ele.shortName === searchData(data,targetSearch,keySearch).shortName) {
       console.log()
      }
      else {
        return;
      }
    });
  },[keySearch])
  return (
    <View styles={[styles.container]}>
      <View style={[styleGlobal.flexBetween,styles.header]}>
        <View style={[styleGlobal.flexCenter,styles.searchBox,{backgroundColor: colorBackground}]}>
        <Icon 
          name="search"
          color={'#767474'}
          size={18}
        />
        <TextInput
          style={styles.input}
          onChangeText={(keySearch) => {
            setKeySearch(keySearch); 
          }}
          value={keySearch}
          placeholder="Tìm mã cổ phiếu"
          placeholderTextColor="#767474"
          keyboardType="text"
          style={[styles.textInput]}
        />
        {
            keySearch ? <TouchableHighlight onPress={() => {setKeySearch("")}} style={[styleGlobal.flexCenter,{backgroundColor:colorBackground,borderRadius:30,width:20,height:20,marginRight:10}]}>
                          <Icon 
                            name="x"
                            color={'#767474'}
                            size={13} 
                          />
                        </TouchableHighlight> : null
        } 
        </View> 
        <TouchableHighlight onPress={() => setShowModal(false)}>
          <Text style={{color:colorText}}>Xong</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.listBox]}>
        <SafeAreaView >
        <FlatList
          data={searchData(data,targetSearch,keySearch)}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({item, index}) => <EditDataLine data={item} colorTitle={colorText} borderColor={borderColor}/>}
          contentContainerStyle={{
            flexGrow: 1,
          }}
       /> 
       </SafeAreaView>
      </View>
    </View>
  )
}

export default memo(SearchScreen)

const styles = StyleSheet.create({
    container: {   
      padding:20,
      margin:20,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent:'flex-start',
    },
    header: {
      paddingHorizontal:20,
      paddingVertical:10,
    },
    searchBox: { 
        height:35,
        width:Dimensions.get('window').width - 100,
        paddingLeft:10,
        borderRadius:10,
     },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      height:35,
      color: '#f5f5f5',
    },
    listBox:{ 
      marginBottom:100,
    },
})