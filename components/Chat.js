import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Text, Avatar } from "react-native-elements";

const Chat = () => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://randomuser.me/api/portraits/women/79.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>Crush</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          I love you..!! Please come back. i wanna die for you
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default Chat;

const styles = StyleSheet.create({});
