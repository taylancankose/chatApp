import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Chat from "./screens/Chat";
import Messaging from "./screens/Messaging";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = async () => {
      setUsername(await AsyncStorage.getItem("username"));
    };
    getUsername();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {username ? (
          <Stack.Group>
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Messaging" component={Messaging} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
