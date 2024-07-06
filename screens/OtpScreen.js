import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const OtpScreen = ({ navigation }) => {

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.heading}>Verify with OTP sent to</Text>
            <Text style={styles.subHeading}>+91 9506521413</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
                <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
                <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
                <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
                <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccountScreen')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
                <Text style={styles.termsText}>By clicking, I accept the <Text style={styles.linkText}>terms of service</Text> and <Text style={styles.linkText}>privacy policy</Text>
                </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        // paddingVertical: 20,
        paddingTop: 80,

    },
    heading: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 10,
        lineHeight: 35,
        fontFamily: 'Montserrat',
    },
    subHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Montserrat',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: 62,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal: 5,
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
    bottomContainer: {
        alignItems: 'center',
    },
    termsText: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
    linkText: {
        color: '#000',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
});

export default OtpScreen;