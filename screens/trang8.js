import React from "react";
import { Text, Image, View, ScrollView, StyleSheet } from "react-native";

const Dresses = () => {
    return(
    <ScrollView>
         <View style={styles.statusbar}>
            <Image 
            source={require('../assets/option.png')}
            style={styles.optionIcon}></Image>

            <Text style={styles.shop}>Shop</Text>

            <Text style={styles.dresses}> Dresses</Text>
         </View>

        <View style={styles.topItem}>
            <View style={styles.topleftItem}>
                    <Image source={require('../assets/img3.png')}
                    style={styles.img}></Image>
                    <Text>$29.99</Text>
                    <Text>Abigail Runched Dress-Jade</Text>
            </View>

            <View style={styles.rightItem}>
            <Image source={require('../assets/img4.png')}
                    style={styles.img}></Image>
                    <Text>$29.99</Text>
                    <Text>Leila Shirt Dress</Text>
            </View> 
         </View>

         <View style={styles.centerItem}>
            <View style={styles.centerLeft}>
                    <Image source={require('../assets/img5.png')}
                    style={styles.img}></Image>
                    <Text>$29.99</Text>
                    <Text>Living My Best Life Lounge</Text>
            </View> 

            <View style={styles.rightItem}>
                    <Image source={require('../assets/img6.png')}
                    style={styles.img}></Image>
                    <Text>$34.99</Text>
                    <Text>The Cindy SnakeSkin Blazer</Text>
            </View> 
        </View>

           <View style={styles.bottomItem}>
            <View style={styles.leftItem}>
                    <Image source={require('../assets/img7.png')}
                    style={styles.img}></Image>
            </View>
            
                <View style={styles.rightItem}>
                <Image source={require('../assets/img8.png')}
                style={styles.img}></Image>
                </View>
            </View>

    </ScrollView>
    );
}

const styles = StyleSheet.create ({
    statusbar:{
            marginTop: 50,
            marginLeft: 30,
    },

    optionIcon:{
        height: 30, 
        width: 30,
    },

    shop:{
        marginTop: -30,
        marginLeft: 40,
        fontSize: 17,
    },

    dresses:{
        marginLeft: 150, 
        fontSize: 20,
        
    },

   

    img:{
        height: 270,
        width: 180,
        borderRadius: 10,
        marginTop: 20,
        
    },

 

    topItem:{
        flexDirection: 'row',
        marginLeft: 35,
       
    },

    rightItem:{
        marginLeft: 35,
    },

    


    centerItem:{
        flexDirection: 'row',
        marginLeft: 35,
    },

    bottomItem:{
        flexDirection: 'row',
        marginLeft: 35,
    }


});

export default Dresses;
