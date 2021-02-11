import React, { useState, useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "./../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        // some stuff...
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
        }}
        style={styles.logo}
      />
      <View style={styles.loginContainer}>
        <Input
          placeholder="email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button containerStyle={styles.button} title="Login" onPress={login} />
        <Button
          containerStyle={styles.button}
          title="Register"
          type="outline"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 5,
  },

  loginContainer: {
    width: 300,
  },

  input: {},

  button: {
    marginTop: 10,
  },
});
