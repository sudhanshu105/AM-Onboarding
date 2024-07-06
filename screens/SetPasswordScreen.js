import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SetPasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('VerificationCode')}>
                <Image source={require("../assets/backArrow.png")} style={styles.backArrow} /></TouchableOpacity>
            <Text style={styles.heading}>You'll need a password</Text>
            <Text style={styles.subheading}>Make sure it's 8 characters or more</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.eyeIcon}>
                    <Image source={require("../assets/eye.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry />
                <TouchableOpacity style={styles.eyeIcon}>
                    <Image source={require("../assets/eye.png")} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UploadProfilePicture')}>
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
        height: 30,
        width: 30,
        marginTop: 25,
    },
    heading: {
        fontSize: 28,
        marginTop: 30,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 16,
        marginBottom: 20,
        color: 'background: rgba(0, 0, 0, 0.6);',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 60,
        fontSize: 16,
    },
    eyeIcon: {
        height: 20,
        width: 20,
        marginRight: 20,
        marginBottom: 20,
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
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SetPasswordScreen;
