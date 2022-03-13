import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View style={styles.container}>
       <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
       <View style={{ flexDirection: 'row' }}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginHorizontal: 10 }}>
                    <Shoes img={require('../../assets/1.png')} cost="140,90">
                        Nike Air Max
                    </Shoes>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                    <Shoes img={require('../../assets/5.png')} cost="120,90">
                        Adidas Joyride Run Flyknit
                    </Shoes>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                    <Shoes img={require('../../assets/3.png')} cost="560,90">
                        Adidas Squidward Tentacles
                    </Shoes>
                </View>
           </ScrollView>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
});