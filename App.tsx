import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Contact } from "./components/Contact";
import { Dummy, Test } from "./components/Playground";
import { styles } from "./globals/styles";
import { ret } from "./mongo";

const eyal = {
  name: "Eyal Jackman",
  nicknames: ["Mr. Dude"],
  Likes: ["Tomatoes", "Ice Cream"],
  Relationships: { "Mom Jackman": "mother", "Dad Jackman": "father" },
  Single: "true!",
  ObjTest: { k1: "v1", k2: "v2" },
};

export default function App() {
  const p = ret();
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <Contact name="Eyal Jackman" nicknames={["Mr. Dude"]} /> */}
      {Contact(eyal)}
      {console.log(p)}
      {/* <Contact json={eyal} /> */}
      {/* <Test></Test> */}
      {/* {["My", "Main", "Man", "Murray"].map((name) => (
        <Dummy key={name} name={name}></Dummy>
      ))}
      {["My", "Main", "Man", "Murray"].map((x) => (
        <Text>{x}</Text>
      ))} */}
      {/* <Button title="Testr" onPress={() => getDB("w")}></Button> */}
      <StatusBar style="auto" />
    </View>
  );
}
