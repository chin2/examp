
// npm i @expo/vector-icons
// npm i react-native-keyboard-aware-scroll-view
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { aColor, bColor } from '../components/color';
import { FontAwesome } from '@expo/vector-icons';




const Product = ((probs) => {
    // console.log(probs.getUser)
  const addtoWishlist=(()=>{
      alert(probs.val)
  })
    return (
        <View style={{}}>
            <View>
                <Text>{probs.val[0]} </Text>
            </View>
            <TouchableOpacity onPress={()=>addtoWishlist(probs.val)}>
                <View style={{ backgroundColor: 'grey', padding: 10, marginTop: 20, borderRadius: 5, flexDirection: 'row' }}>
                    <Text style={{ color: 'white', marginLeft: 5, fontWeight: 'bold' }}>Add to Wishlist</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-around' }}>

                <Text style={{ color: "#888888" }}>Original Price:</Text>
                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontWeight: 'bold' }}>{'\u20B9'}{probs.val[1]}</Text>

            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-around' }}>

                <Text style={{ color: "#888888" }}>Offer Price:</Text>
                <Text style={{ fontWeight: 'bold' }}>{'\u20B9'}{probs.val[2]}</Text>

            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-around' }}>

                <Text style={{ color: "#888888" }}>Discount:</Text>
                <Text style={{ fontWeight: 'bold' }}>10%</Text>

            </View>
        </View>

    )
})
export default function Payment({ navigation, probs }) {
    const data=[['friedchicken',200,300],['chicken  risc',200,300],['beef  risc',200,300],['mutton  risc',200,300],['briyan',200,300]]
    const MCdata=[['cafe',20,13],['chocolate',20,18],['capp',9,3],['',200,300],['briyan',200,300]]

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
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ marginTop: 50, fontSize: 50, fontWeight: 'bold' }}>KFC</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-around' }}>

                            {data.map((e)=>{
                                return (<Product val={e}/>)
                            })}

                        </View>



                    </ScrollView>
                </View>


                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ marginTop: 50, fontSize: 50, fontWeight: 'bold' }}>Mcde</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-around' }}>

                            {MCdata.map((e)=>{
                                return (<Product val={e}/>)
                            })}

                        </View>



                    </ScrollView>
                </View>



            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

