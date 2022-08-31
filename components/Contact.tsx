import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { styles } from "../globals/styles";

const contactStyles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 24,
  },
});

const interpretObj = (key: string, val: object | string) => {
  const objBreak = (objOrArr: object | Array<object>) => {
    if (typeof objOrArr === "string") return objOrArr;
    if (Array.isArray(objOrArr))
      return objOrArr.map((arrVal) => (
        <>
          <Text>{arrVal}</Text>
          <br />
        </>
      ));
    else {
      const newArr = Object.keys(objOrArr);
      return (
        <Text>
          {newArr.map((key, idx) => (
            <>
              <Text>
                {key} : {objBreak(objOrArr[key])}
              </Text>
              {idx !== newArr.length - 1 && <br />}
            </>
          ))}
        </Text>
      );
    }
  };
  return (
    <>
      <Text style={styles.title}>{key}</Text>
      <Text>{typeof val === "string" && val}</Text>
      <Text>{typeof val === "object" && objBreak(val)}</Text>
      <br />
    </>
  );
};

const Contact = (props: any) => {
  //   const { name, nicknames } = props;
  //   const { props } = { name, nicknames };
  const obj = { ...props };
  return (
    <View style={styles.contactCard}>
      <Text style={contactStyles.title}>{obj.name}</Text>
      <Text>AKA {obj.nicknames.join(",")}</Text>
      <br />
      {delete obj.name}
      {delete obj.nicknames}
      {Object.keys(obj).map((x) => (
        <>
          {interpretObj(x, obj[x])}
          {/* <Text style={{ fontWeight: "bold", paddingTop: 20 }}>{x} </Text> */}
          {/* <Text>{obj[x]}</Text> */}
        </>
      ))}
    </View>
  );
};

export { Contact };
