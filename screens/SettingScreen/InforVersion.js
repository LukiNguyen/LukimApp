import { StyleSheet, Text, View } from 'react-native'
import { withTheme } from 'react-native-paper';
import React from 'react' 

const InforVersion = ({theme}) => {
    const { colors } = theme;  
    const data = [
      {content: 'Verions 1.0.0:'},
      {content: '- Dark/Light mode'},
      {content: '- Quản lý giao dịch (Bộ lọc: Thời gian, Trạng thái)'}, 
      {content: '- Tìm kiếm mã chứng khoán'}, 
      {content: '- Thêm, Sửa, Xóa danh sách theo dõi'}, 
    ]
    return (  
        <View style={[styles.container,{backgroundColor:colors.titleBoxBackgroundColor}]}>
          
        { 
          data.map((ele,index) => {
            return <Text style={[{color:colors.text,fontSize:15}]} key={index}>{ele.content}</Text>
          })
        } 
      </View>
    )
}

export default withTheme(InforVersion)

const styles = StyleSheet.create({
    container: {
        padding:20,
        margin:20,
        borderRadius:10,
    }
})