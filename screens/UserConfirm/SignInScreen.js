import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput,Platform,StyleSheet ,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';  
import Feather from 'react-native-vector-icons/Feather'; 
import { useForm, useController } from 'react-hook-form';
import { useUserActions } from '../../hook/useUserActionsContext'
const SignInScreen = ({navigation}) => {
    const { login,retrieveToken } = useUserActions()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ isUser, setIsUser ] = useState(false)
    const { control, handleSubmit } = useForm() 
    const dataUser =  ["lukim",'admin']
    const dataPassword = ["lukim",'admin']
    const onSubmit = (data) => { 
        if(dataUser.includes(data.userName, 0) && dataPassword.includes(data.passWord, 0)) {
            setIsUser(false)
            retrieveToken()
            setTimeout( async () => { 
                await login(data) 
                console.log('ok')
            }, 1000); 
        }
        else {
            setIsUser(true)
        } 
    }
    const Input = ({name, control,placeholder,secureTextEntry}) => {
        const { field } = useController({
            control,
            defaultValue:'',
            name,
        })
        return (
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#666666"
                style={[styles.textInput, {
                    color: '#000'
                }]}
                autoCapitalize="none"  
            /> 
        )
    }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#1b242d' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Đăng nhập ngay!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor:'#fff'
            }]}
        >
            <Text style={[styles.text_footer, {
                color: '#000'
            }]}>Tên người dùng</Text>
            <View style={styles.action}>
                <Feather 
                    name="user"
                    color={'#000'}
                    size={20}
                />
                <Input 
                    name='userName' 
                    control={control} 
                    placeholder="example@gmail.com" 
                    secureTextEntry={false}
                    />
            </View> 
            

            <Text style={[styles.text_footer, {
                color: '#000',
                marginTop: 35
            }]}>Mật khẩu</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={'#000'}
                    size={20}
                />
                <Input 
                    name='passWord' 
                    control={control} 
                    placeholder="******"
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    onPress={()=>setShowPassword(!showPassword)}
                >
                    {!showPassword ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            {   
                !isUser ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Tài khoản hoặc Mật khẩu không hợp lệ!</Text>
                </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#1b242d', marginTop:15}}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <View style={styles.button}> 
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    style={[styles.signIn, {
                        backgroundColor: '#1b242d',
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Đăng nhập</Text>
                </TouchableOpacity> 
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1b242d'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        height:44,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });