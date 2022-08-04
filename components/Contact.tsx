import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../globals/styles";

const contactStyles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 24,
  },
});

const interpretObj = (obj: object) => {
    
}

const Contact = (props: any) => {
  //   const { name, nicknames } = props;
  //   const { props } = { name, nicknames };
  const obj = { ...props };
  return (
    <View style={styles.contactCard}>
      <Text style={contactStyles.title}>{obj.name}</Text>
      <Text>AKA {obj.nicknames.join(",")}</Text>
      {/* <br /> */}
      {delete obj.name}
      {delete obj.nicknames}
      {Object.keys(obj).map((x) => (
        <>
          <Text style={{ fontWeight: "bold", paddingTop: 20 }}>{x} </Text>
          <Text>{obj[x]}</Text>
        </>
      ))}
    </View>
  );
};

export { Contact };
