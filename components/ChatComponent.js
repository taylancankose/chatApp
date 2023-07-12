import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ChatComponent = ({ item }) => {
  const [messages, setMessages] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    setMessages(item?.messages[item.messages.length - 1]);
  }, []);

  const navigateMessage = () => {
    navigation.navigate("Messaging", {
      item,
    });
  };

  return (
    <TouchableOpacity
      onPress={navigateMessage}
      activeOpacity={0.88}
      style={{
        flex: 1,
        marginHorizontal: 15,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          maxWidth: Dimensions.get("window").width / 1.7,
        }}
      >
        <Image
          source={{ uri: item.photoURL }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            marginRight: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            {messages?.text}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {messages?.time}
        </Text>
        <View
          style={{
            height: 16,
            width: 16,
            borderRadius: 15,
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 9,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {item.messages.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;
