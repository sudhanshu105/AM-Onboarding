import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.outerContainer}>
      <Image source={require('../assets/amspeed.jpg')} style={styles.homeImage} />
      <Text style={styles.heading}>
        Enter your mobile number to get OTP
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.phone}>+91</Text>
        <View style={styles.verticalLine} />
        <TextInput
          style={styles.input}
          placeholder="10 digit mobile number"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('otp')}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>


      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>


      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={styles.termsText}>
          By clicking, I accept the <Text style={styles.linkText}>terms of service</Text> and <Text style={styles.linkText}>privacy policy</Text>
        </Text>
      </View>


      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  homeImage: {
    width: 288,
    height: 223,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    lineHeight: 35,
    fontFamily: 'MontserratBold',
    // textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 11,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  phone: {
    fontSize: 16,
    marginRight: 10,
    fontFamily: 'Montserrat',
  },

  verticalLine: {
    width: 1,
    height: '40%',
    backgroundColor: 'gray',
    // marginHorizontal: 10,
    marginRight: 10,
  },


  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 12,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'MontserratBold',
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    marginTop: 1,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    color: 'gray',
    fontFamily: 'Montserrat',
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 1)',
    borderRadius: 12,
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#E8E8E8'
  },
  socialIcon: {
    width: 20,
    height: 20,
    // marginRight: 30,
  },

  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'MontserratBold',
  },

  bottomContainer: {
    flex: 1,
    fontSize: 12,
    alignItems: 'center',
  },

  linkbutton: {
    fontSize: 12,
  },

  termsText: {
    marginTop: 20,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },

  linkText: {
    color: '#000',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default LandingScreen;
