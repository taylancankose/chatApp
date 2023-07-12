import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dialog from "../components/Dialog";

const { width } = Dimensions.get("window");

const Messaging = () => {
  const router = useRoute();
  const navigation = useNavigation();
  const { item } = router.params;
  const [message, setMessage] = useState(null);
  const [icon, setIcon] = useState("microphone");
  const [messages, setMessages] = useState([
    {
      id: Math.random(),
      message: "Selam, nasılsın?",
      timeStamp: "1683815335",
      isMe: true,
    },
    {
      id: Math.random() + 5,
      message: "İyilik sen nasılsın?",
      timeStamp: "1693579720",
      isMe: false,
    },
    {
      id: Math.random(),
      message: "Selam, nasılsın?",
      timeStamp: "1582102120",
      isMe: true,
    },
    {
      id: Math.random() + 5,
      message: "İyilik sen nasılsın?",
      timeStamp: "1587638920",
      isMe: false,
    },
    {
      id: Math.random(),
      message: "Selam, nasılsın?",
      timeStamp: "1701730120",
      isMe: true,
    },
  ]);

  const newMessages = messages.sort((a, b) => a.timeStamp - b.timeStamp);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: item.photoURL }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 30,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "gray",
                marginTop: 2,
              }}
            >
              Online
            </Text>
          </View>
        </View>
      ),
    });
  }, []);

  const sendMessage = () => {
    setMessages((prevState) => {
      return [
        ...prevState,
        {
          message: message,
          id: Math.random(),
          timeStamp: Date.now(),
          isMe: true,
        },
      ];
    });
    setMessage(null);
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: "https://i.pinimg.com/originals/79/06/84/790684a15b1cd5750dd7915d76f1c28e.jpg",
        }}
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <FlatList
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          data={newMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Dialog
              isMe={item.isMe}
              message={item.message}
              date={item.timeStamp}
            />
          )}
        />
      </ImageBackground>
      <View
        style={{
          position: "absolute",
          width: width,
          backgroundColor: "white",
          height: 80,
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: width * 0.12,
            height: width * 0.12,
            backgroundColor: "darkblue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 225,
            zIndex: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 24,
            }}
          >
            +
          </Text>
        </View>

        <View
          style={{
            width: width * 0.8,
            backgroundColor: "white",
            height: width * 0.12,
            borderRadius: 200,
            paddingHorizontal: 15,
            justifyContent: "center",
            backgroundColor: "#F8F8F8",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="Type Here..."
            value={message}
            onChangeText={(text) => {
              setMessage(text);
              setIcon("send");
              if (text === "") {
                setIcon("microphone");
              }
            }}
            onSubmitEditing={() => {
              setIcon("microphone");
            }}
          />
          <TouchableOpacity onPress={icon === "send" && sendMessage}>
            {icon === "send" ? (
              <Text
                style={{
                  color: "darkblue",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                GÖNDER
              </Text>
            ) : (
              <MaterialCommunityIcons
                name="microphone"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Messaging;
