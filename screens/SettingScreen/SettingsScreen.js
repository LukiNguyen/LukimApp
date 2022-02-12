import React,{useContext} from 'react';
import { View,TouchableHighlight,Text, StyleSheet, Alert ,ScrollView , SafeAreaView} from 'react-native';
import { withTheme } from 'react-native-paper';
import { SettingContext } from './Context'; 
import ActionLine from '../../components/ActionLine';
import InforLine from '../../components/InforLine'; 
import { useUserActions } from '../../hook/useUserActionsContext'
function SettingsScreen({ navigation,theme }) { 
    const settings = useContext(SettingContext) 
    // const { logout } = useUserActions()
    const {colors} = theme
    return (
        <View  style={{backgroundColor:"#f3f3f3"}}>
            <SafeAreaView  >
        <ScrollView  style={styles.boxContainer}> 
            <Text style={[styles.titleBox,{backgroundColor:colors.titleBoxBackgroundColor, color:colors.titleBoxColor}]}>Tổng quan</Text>
            <View  style={{backgroundColor:colors.background}}>
                <TouchableHighlight onPress={() => navigation.navigate('Ngôn ngữ')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Ngôn ngữ" 
                        value={
                            settings.options.language ==='vie' ? 'Tiếng Việt' : 'Tiếng Anh'
                        } 
                        stack={true}/> 
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => navigation.navigate('Hiển thị')} underlayColor="#ffffff00">  
                    <InforLine 
                        title="Hiển thị"    
                        value={
                            settings.options.theme ==='light' ? 'Sáng' : 'Tối'
                        }
                        stack={true}
                    /> 
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ffffff00">  
                    <ActionLine title="Đặt lệnh nhanh" value={true}  /> 
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ffffff00">  
                    <ActionLine title="Thông báo giao dịch" value={true}  /> 
                </TouchableHighlight>
            </View>

            <Text style={[styles.titleBox,{backgroundColor:colors.titleBoxBackgroundColor, color:colors.titleBoxColor}]}>Bảo mật</Text>
            <View  style={{backgroundColor:colors.background}}>
            <TouchableHighlight onPress={() => Alert.alert("Tính năng đang cập nhật!")} underlayColor="#ffffff00">  
                <InforLine 
                    title="Xác thực 2 yếu tố" 
                    value={
                        settings.options.security ==='on' ? 'Bật' : 'Tắt'
                    } 
                    stack={true}/> 
            </TouchableHighlight>
            
            <TouchableHighlight underlayColor="#ffffff00">  
                <ActionLine title="Lưu PIN" value={false}  /> 
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#ffffff00">  
                <ActionLine title="Đăng nhập bằng vân tay" value={false}  /> 
            </TouchableHighlight>
            </View>
            <Text style={[styles.note,{backgroundColor:colors.titleBoxBackgroundColor, color:colors.titleBoxColor}]}>Lưu ý: Tất cả vân tay đã được đăng ký trong thiết bị đều có thể xác thực</Text>

            <Text style={[styles.titleBox,{backgroundColor:colors.titleBoxBackgroundColor, color:colors.titleBoxColor}]}>Thông tin ứng dụng</Text>
            <View  style={{backgroundColor:colors.background}}> 
            <TouchableHighlight onPress={() => Alert.alert("Tính năng đang cập nhật!")} underlayColor="#ffffff00">  
                <InforLine 
                    title="Đánh giá về chúng tôi" 
                    stack={true}/> 
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert("Tính năng đang cập nhật!")} underlayColor="#ffffff00">  
                <InforLine 
                    title="Chính sách & điều khoản sử dụng" 
                    stack={true}/> 
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate("Thông tin phiên bản")} underlayColor="#ffffff00">  
                <InforLine 
                    title="Phiên bản ứng dụng" 
                    stack={true}/> 
            </TouchableHighlight>
             
            </View>
            </ScrollView> 
        </SafeAreaView> 
        </View>
    );
}
export default withTheme(SettingsScreen)
const styles = StyleSheet.create({  
    titleBox: { 
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:10,
    },
    note:{
        paddingHorizontal:20,
        paddingTop:5,
        fontWeight:"100" 
    },
});