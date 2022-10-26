import { Pressable } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.omddVLpo}>
      <View style={_styles.ojDOgMjN}></View><View style={_styles.czZkbLWR}></View><TextInput style={_styles.wDDBlhnI}></TextInput><Text style={_styles.vIcPCECc}>First Name</Text><Pressable onPress={() => navigation.navigate("Untitled2")} style={_styles.kWFPjAMs}><View style={_styles.QzZMVQiY}></View></Pressable><Text style={_styles.TTwLrEug}>Save</Text></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  omddVLpo: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  ojDOgMjN: {
    left: 11,
    top: 25,
    position: "absolute",
    height: 197,
    width: 334,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  czZkbLWR: {
    left: 135,
    top: 168,
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#fdfdfd",
    borderRadius: "50%"
  },
  wDDBlhnI: {
    left: 36,
    top: 302,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 296,
    height: 37
  },
  vIcPCECc: {
    left: 40,
    top: 274,
    position: "absolute",
    width: 123,
    height: 27,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700"
  },
  QzZMVQiY: {
    left: 45,
    top: 463,
    position: "absolute",
    height: 43,
    width: 270,
    backgroundColor: "#000000",
    borderRadius: 0,
    color: "#777777"
  },
  TTwLrEug: {
    left: 128,
    top: 475,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center"
  },
  kWFPjAMs: {
    position: "unset"
  }
});