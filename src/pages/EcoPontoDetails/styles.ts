import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageEcoPonts: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4d6f80',
    fontSize: 28,
    fontFamily: 'Nunito_700Bold',
  },

  titleAddress: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#5c8599',
    lineHeight: 18,
    marginTop: 16,
    fontSize: 16,
  },

  address: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#000',
    lineHeight: 18,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#b3dae2',
    marginTop: 20,
    backgroundColor: '#e6f7fb',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  buttonRoutesContainer: {
    padding: 16,
    alignContent: 'center',
  },

  routesText: {
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
    color: '#0089a5',
  },

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#d3e2e6',
    marginVertical: 20,
  }
});