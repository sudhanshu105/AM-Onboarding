import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const UploadProfilePictureScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('SetPassword')}>
        <Image source={require("../assets/backArrow.png")} style={styles.backArrow} /></TouchableOpacity>
      <Text style={styles.heading}>Pick a profile picture</Text>
      <Text style={styles.subheading}>Have a favorite selfie? Upload it now or choose avatar</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <Image source={require("../assets/upload.png")} style={styles.uploadImage} />
      </TouchableOpacity>
      <Text style={styles.avatarText}>Select your avatar</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoadingScreen')}>
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
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Montserrat',
  },
  uploadContainer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadImage: {
    height: 200,
    width: 200,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
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
});

export default UploadProfilePictureScreen;
