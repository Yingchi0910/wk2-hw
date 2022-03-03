import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>LANA DEL REY PICKS</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#121738",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
  },
  textStyle: {
    color:"#E0E0E0",
    fontSize: 15,
  },
});

export default Header;