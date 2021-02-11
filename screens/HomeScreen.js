import React, { useLayoutEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Button, Text, Avatar } from "react-native-elements";
import Chat from "../components/Chat";
import { auth } from "./../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTitleColor: "black",
      headerLeft: () => {
        return (
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={signOut}>
              <Avatar
                rounded
                source={{
                  uri: auth?.currentUser?.photoURL,
                }}
              />
            </TouchableOpacity>
          </View>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 80,
              marginRight: 20,
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camerao" color="black" size={24} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <SimpleLineIcons name="pencil" color="black" size={20} />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Chat />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
