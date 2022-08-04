import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Contact } from "./components/Contact";
import { Dummy, Test } from "./components/Playground";
import { styles } from "./globals/styles";

const eyal = {
  name: "Eyal Jackman",
  nicknames: ["Mr. Dude"],
  Likes: ["Tomatoes", "Ice Cream"],
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <Contact name="Eyal Jackman" nicknames={["Mr. Dude"]} /> */}
      {Contact(eyal)}
      {/* <Contact json={eyal} /> */}
      {/* <Test></Test> */}
      {/* {["My", "Main", "Man", "Murray"].map((name) => (
        <Dummy key={name} name={name}></Dummy>
      ))}
      {["My", "Main", "Man", "Murray"].map((x) => (
        <Text>{x}</Text>
      ))} */}
      <StatusBar style="auto" />
    </View>
  );
}
