import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const VerificationCodeScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccountScreen')}>
        <Image source={require("../assets/backArrow.png")} style={styles.backArrow} /></TouchableOpacity>
      <Text style={styles.heading}>We sent you a code</Text>
      <Text style={styles.subheading}>Enter it below to verify example@gmail.com</Text>
      <View style={styles.codeContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput key={index} style={styles.codeInput} maxLength={1} keyboardType="numeric" />
        ))}
      </View>
      
      <Text style={styles.linkText}>Didn't receive a mail?</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetPassword')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backArrow: {
    height:30,
    width:30,
    marginTop:25,
  },

  heading: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: 'background: rgba(0, 0, 0, 0.6);',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '15%',
    textAlign: 'center',
  },
  button: {
    width: 100,
    backgroundColor: 'black',
    borderRadius: 33,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    marginRight:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    // marginTop: 20,
    fontSize: 14,
    color: 'blue',
    // textAlign: 'center',
  },
});

export default VerificationCodeScreen;
