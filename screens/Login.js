import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  const handleSignIn = async () => {
    try {
      await AsyncStorage.setItem("username", username);
      navigation.navigate("Chat");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your username"
          value={username}
          onChangeText={(txt) => setUsername(txt)}
        />
      </View>
      <TouchableOpacity
        on
        disabled={!username}
        style={!username ? styles.btnMuted : styles.btn}
        onPress={handleSignIn}
      >
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#A4036F",
  },
  header: {
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: "700",
    color: "white",
  },
  inputContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
    margin: 20,
    borderRadius: 8,
    elevation: 5,
  },
  btnMuted: {
    backgroundColor: "#EFEA5A",
    justifyContent: "center",
    height: 50,
    margin: 20,
    borderRadius: 125,
    elevation: 5,
    alignItems: "center",
    opacity: 0.7,
  },
  btn: {
    backgroundColor: "#EFEA5A",
    justifyContent: "center",
    height: 50,
    margin: 20,
    borderRadius: 125,
    elevation: 5,
    alignItems: "center",
  },
  btnTxt: {
    color: "#A4036F",
    fontWeight: "bold",
    fontSize: 20,
  },
});
