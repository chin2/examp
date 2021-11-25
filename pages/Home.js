
// npm i @expo/vector-icons
// npm i react-native-keyboard-aware-scroll-view
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { aColor, bColor } from '../components/color';
import { FontAwesome } from '@expo/vector-icons';

let a = [{
    "shopdetails": [{ "name": "KFC", "items": [{ "id": 1, "name": 'friedchicken', "price": 100, }] },
    { "name": "MC", "items": [{ "id": 1, "name": 'chickenChicken pot pie.', "price": 1001, }] },
    { "name": "Dominoz", "items": [{ "id": 1, "name": 'Mashed potatoes.', "price": 200, }] },
    { "name": "tasty", "items": [{ "id": 1, "name": 'Fried chicken.', "price": 300, }] },
    { "name": "kitchen", "items": [{ "id": 1, "name": 'Chicken soup.', "price": 400, }] }]
}]


export default function Home({ navigation, probs }) {

    let user = "mani@gmail.com"
    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, alignItems: 'center' }}>

                    <Text>
                        Food Delivery App
                    </Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 100 }}>
                    {user}
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

