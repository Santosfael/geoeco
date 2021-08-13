import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backgroundProfile: {
    width: Dimensions.get('window').width,
    height: 255,
  },

  contatinerUser: {
    padding: 10,
    marginTop: -100,
    marginLeft: 10,
    marginEnd: 10,
    marginBottom: 30,

    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255, 0.95)',
    elevation: 5,
  },

  contentProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 10,
  },


  contentUser: {
    alignItems: 'flex-start',
  },

  nameUser: {
    marginBottom: 5,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
  },

  emailUser: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  },

  imgProfile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  buttonEdit: {
    width: '90%',
    marginLeft: 15,
    marginTop: 10,
    height: 46,
    backgroundColor: '#32441b',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    color: '#fff',
  },

  containerInfor: {

  }
});