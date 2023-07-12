import { View, Text } from "react-native";
import React from "react";

const Dialog = ({ isMe, message, date }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          padding: 5,
        },
        !isMe
          ? {
              justifyContent: "flex-start",
              alignSelf: "flex-start",
            }
          : {
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            },
      ]}
    >
      <View
        style={[
          {
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 10,
            elevation: 1,
            marginVertical: 5,
          },
          isMe
            ? {
                borderTopRightRadius: 0,
                alignSelf: "flex-end",
              }
            : {
                borderTopLeftRadius: 0,
              },
        ]}
      >
        <Text
          style={{
            left: -10,
          }}
        >
          {message}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            textAlign: "right",
            paddingTop: 3,
            right: -10,
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
};

export default Dialog;
