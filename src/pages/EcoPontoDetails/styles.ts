import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageEcoPonts: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  }
});