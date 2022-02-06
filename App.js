
import UserProvider from './screens/UserConfirm/Context'; 
import { SettingProvider } from './screens/SettingScreen/Context';
import HandleScreen from './screens/HandleScreen';
export default function App() { 
  return (  
    <UserProvider>
      <SettingProvider>
        <HandleScreen/> 
      </SettingProvider>
    </UserProvider>
  );
} 

