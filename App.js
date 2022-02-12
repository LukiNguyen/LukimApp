import UserProvider from './screens/UserConfirm/Context'; 
import { SettingProvider } from './screens/SettingScreen/Context';
import HandleScreen from './screens/HandleScreen'; 
import 'react-native-gesture-handler';
import SearchProvider from './screens/SearchScreen/Context';


export default function App() { 
  return (   
    <UserProvider>
      <SettingProvider> 
      <SearchProvider> 
        <HandleScreen/> 
      </SearchProvider>
      </SettingProvider>
    </UserProvider> 
  );
}  