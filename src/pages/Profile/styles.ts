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
    marginBottom: 10,

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
    fontSize: 16,
    color: '#fff',
  },

  containerInfor: {
    margin: 10,
  },

  contentDatas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  cardDatas: {
    width: 90,
    height: 90,

    padding: 2,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    textAlign: 'center',
    fontFamily: 'Nunito_600SemiBold',
    color: 'rgba(136,141,155, 1)',
    fontSize: 13,
  },

  textSubTitle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    color: '#000',
  },

  contentOtherData: {
    margin: 10,
  },

  textTitleOtherData: {
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
    color: '#000',
    fontSize: 18,
    marginBottom: 20
  },  

  dataContact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  buttonListData: {
    padding: 10,
    width: '100%',
    height: 56,
    backgroundColor: '#8eab57',

    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',

    justifyContent: 'space-between',
  }
});