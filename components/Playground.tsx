import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../globals/styles";

const Test = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <>
      <Text>{count}</Text>
      <Button title="Click me" onPress={() => setCount((x) => x + 1)}></Button>
      <br></br>
      <Text>{text}</Text>
      <TextInput
        // onKeyPress={(txt) => setText(txt)}
        style={styles.textInput}
      ></TextInput>
    </>
  );
};

const Dummy = ({ name }: { name: string }) => {
  return (
    <View style={styles.textInput}>
      <Text>{name}</Text>
    </View>
  );
};

export { Test, Dummy };
