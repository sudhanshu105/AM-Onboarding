import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, StyleSheet,Image } from 'react-native-web';

const TermsAndCondition = () => {
  return (
    <View style={styles.bottomContainer}>
      {/* <Text style={styles.termsText}>By<Text style={styles.linkText}>terms</Text>and<Text style={styles.linkText}>privacy policy</Text></Text> */}
      
      <Pressable>
      <Image source={require('../assets/amspeed.jpg')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
  termsText: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  linkText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default TermsAndCondition;
