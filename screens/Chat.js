import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChatComponent from "../components/ChatComponent";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "../components/Modal";

const rooms = [
  {
    id: "1",
    name: "Novu Hangouts",
    photoURL:
      "https://images.pexels.com/photos/14448342/pexels-photo-14448342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    messages: [
      {
        id: "1a",
        text: "Hello guys, welcome!",
        time: "07:50",
        user: "Tomer",
      },
      {
        id: "1b",
        text: "Hi Tomer, thank you! 😇",
        time: "08:50",
        user: "David",
      },
    ],
  },
  {
    id: "2",
    name: "Hacksquad Team 1",
    photoURL:
      "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    messages: [
      {
        id: "2a",
        text: "Guys, who's awake? 🙏🏽",
        time: "12:50",
        user: "Team Leader",
      },
      {
        id: "2b",
        text: "Lorem ipsum dolor sit amed, aviad. Advis fortuna advocad",
        time: "03:50",
        user: "Victoria",
      },
    ],
  },
  {
    id: "3",
    name: "Irish Pub Sevdalıları",
    photoURL:
      "https://images.pexels.com/photos/3566226/pexels-photo-3566226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    messages: [
      {
        id: "3a",
        text: "Guys?",
        time: "14:12",
        user: "Team Leader",
      },
      {
        id: "3b",
        text: "What's up? 🧑🏻‍💻",
        time: "12:25",
        user: "Taylan",
      },
    ],
  },
];
const Chat = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Ionicons name="ios-create-outline" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    const getUsername = async () => {
      setUsername(await AsyncStorage.getItem("username"));
    };
    getUsername();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        {rooms ? (
          <FlatList
            data={rooms}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChatComponent item={item} />}
          />
        ) : (
          <View style={styles.noRoomContainer}>
            <Text>There are no rooms</Text>
            <Text>Click above the edit icon to create a Chat room</Text>
          </View>
        )}
      </View>
      {visible && <Modal setVisible={setVisible} />}
    </SafeAreaView>
  );
};

export default Chat;
const styles = StyleSheet.create({
  noRoomContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
  },
});
