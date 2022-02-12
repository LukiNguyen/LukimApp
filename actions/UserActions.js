import AsyncStorage from '@react-native-async-storage/async-storage'
const Storage = async (userInfor) => {   
    try {
        await AsyncStorage.setItem('userToken', userInfor);
    } catch(e) {
        console.log(e);
    }
} 
const checkStorageUser = async (target) => {   
    let userToken = null; 
    try {
        userToken = await AsyncStorage.getItem(target);
    } catch(e) {
        console.log(e);
    }
    return userToken;
}
const dataUser = ['lukim','admin']

const UserActions = (prevState, action) => {
    switch( action.type ) {
        case 'RETRIEVE_TOKEN': 
            return {
            ...prevState, 
            // Handle Token is here
            isLoading: true,
            
        };
        case 'LOGIN':
            Storage(action.payload.userName)
            return {
            ...prevState,
            userName:action.payload.userName,
            passWord: action.payload.passWord, 
            isLoading: false,
            isUser:true, 
        };
        case 'LOGOUT': 
            return {
            ...prevState,
            userName: null,
            userToken: null,
            isLoading: false,
        };
        case 'REGISTER': 
            return {
            ...prevState,
            userName: prevState.userName,
            userToken: prevState.token,
            isLoading: false,
        };
        case 'REDIRECT_USER':  
        console.log( 'ok')
            // checkStorageUser('userToken').then(data => {
            //     if(dataUser.includes(data,0)) { 
            //         return {
            //             ...prevState,
            //             isLoading: false,
            //             isUser:true,
            //         };  
            //     }
            //     else {
            //         return {
            //             ...prevState,
            //             userName: null,
            //             passWord: null, 
            //             isLoading: false,
            //             isUser:false,
            //         };
            //     } 
            // })
        default:
            return prevState
    }
  };

export {UserActions,checkStorageUser,Storage}