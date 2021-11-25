import React, { useState } from 'react';
import { StyleSheet, Text, View, CheckBox, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { aColor, bColor } from '../components/color';
import firebase, { auth } from '../db/firebase';

export default function Signup({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Error, setError] = useState("")

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            return false
        }
        else {
            return true
        }
    }


    const signUpValidate = async () => {
        if (Password == "" || Email == "") {
            setError("Every Field is Required")
        }
        else if (!validate(Email)) {
            setError("Enter Valid Email")
        }
        else {
            if (Password[0] == 1) {
                alert("Must contain one Small Characters or single Characters")
            }
            try {
                const ref = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(Email, Password);
                alert('sucess,login to continue');
            } catch (error) {
                alert('Error creating account' + error);
            }
        }
    }

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: bColor, marginTop: 20 }}>
            <SafeAreaView style={styles.container}>
                <View
                // style={{flex:1, justifyContent: 'space-around', height: windowHeight }}
                >
                    <View>

                        <View style={{ width: '100%', alignItems: 'center', marginTop: 100 }}>
                            <Text style={styles.createHelp}>Sign up! </Text>
                        </View>
                        <View style={styles.textInputView}>
                            <View style={styles.searchSection}>
                                <MaterialIcons style={styles.searchIcon} name="email" size={20} color="white" />
                                <TextInput style={styles.input} label="Email" placeholder="Enter the email" onChangeText={(e) => { setEmail(e); setError("") }} />
                            </View>

                            <View style={styles.searchSection}>
                                <FontAwesome5 style={styles.searchIcon} name="key" size={20} color="white" />
                                <TextInput style={styles.input} label="Password" placeholder="Enter the Password" secureTextEntry={true} onChangeText={(e) => { setPassword(e); setError("") }} />
                            </View>

                            {Error == "" ? <Text></Text> : <Text style={{ color: 'red', alignContent: 'center', justifyContent: 'center' }}>{Error}</Text>}
                        </View>
                        <View style={styles.container}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Are you eligable to Vote?</Text>
                            </View>
                        </View>
                        <View style={styles.loginButtonView}>
                            <TouchableOpacity onPress={signUpValidate}>
                                <View style={styles.loginButton}>
                                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '700' }}>Sign up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.signinView}>
                        <Text style={styles.siginAlready}>
                            I'm Already a member! <Text style={styles.signinLink} onPress={() => { navigation.push("Login") }} >Sign In</Text>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        marginHorizontal: (10 * windowWidth) / 100,
        backgroundColor: bColor
    }, checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color:'white'
    },
    createHead: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50
    },
    createHelp: {
        fontWeight: '900',
        fontSize: 21,
        color: 'white',
        marginTop: -(1 * windowHeight) / 100
    },
    textInputView: {
        marginTop: 10,
    },
    inputBox: {
        borderWidth: 1,
        height: (6 * windowHeight) / 100,
        borderRadius: 8,
        borderColor: '#C0C0C0',
        paddingHorizontal: 20,
        marginTop: (2 * windowHeight) / 100,
    },
    loginButtonView: {
        marginTop: (6 * windowHeight) / 100,
    },
    loginButton: {
        backgroundColor: aColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: (6 * windowHeight) / 100
    },
    signinView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: 20,
    },
    siginAlready: {
        fontWeight: 'bold',
        color: 'white'
    },
    signinLink: {
        color: aColor
    },
    searchSection: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: windowHeight / 80
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        // height:1000,
        borderColor: '#C0C0C0',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: 'white',
    },
})


// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Profile Screen </Text>
//             <Image style={styles.imageView} source={{ uri: "https://i.imgur.com/TkIrScD.png" }} />
//             <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
//                 <Text style={styles.buttonText}>Pick a photo</Text>
//             </TouchableOpacity>
//         </View>