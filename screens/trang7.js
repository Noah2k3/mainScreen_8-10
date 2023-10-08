import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ShoppingBag = () => {
    return(
        <View>
        <View style={styles.statusBar}>
            <Image source={require('../assets/option.png')}
            style={styles.optionImg}>
            </Image>

            <Text style={styles.text}>Shop</Text>
            <Text style={styles.text2}>Shopping Bag</Text>
        </View>

        <View style={styles.categoryItem}>
                <View style={styles.item1}>
                    <Image source={require('../assets/img1.png')}
                    style={styles.img1}></Image>
                    <View style={styles.textItem1}>
                        <Text >Life is a Safari dress-Khaki</Text>
                        <View style={styles.color}>
                        <Text> Color </Text>
                        <Image source={require('../assets/tick.png')}
                        style={styles.tickImg}></Image>
                        
                        </View>
                        <View style={styles.size}>
                        <Text> Size</Text>
                        
                        </View>
                    </View>
                </View>
                <View style={styles.item2}>

                </View>
        </View>
    </View>
        
    );
}

const styles = StyleSheet.create({
    statusBar:{
         position: "absolute",
         marginTop: 30,
         marginLeft: 10,
    },

    optionImg:{
        height: 20,
        width: 30,
        marginTop: 30,
    },

    text: {
        fontSize: 18,
        marginTop: -20,
        marginLeft: 25,
    },

    text2:{
        fontSize: 20,
       marginLeft: 150,
       marginTop: -10,
    }, 

  item1:{
        borderRadius: 20,
        borderWidth: 1,
        height: 200,
        width: 450,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 130,
    },

    item2:{
        borderRadius: 20,
        borderWidth: 1,
        height: 200,
        width: 450,
        marginLeft: 15,
        marginBottom: 15,
    },

    img1:{
        borderRadius: 20,
        height: 199,
        width: 120,
       
    },


    textItem1:{
        marginTop: -190,
        marginLeft: 140,
        fontSize: 30,
    },
   
    color:{
        marginTop: 10,
        flexDirection: "row",
    },

    size:{
        marginTop: 10,    
    },

    tickImg:{
        borderWidth: 1, 
        height: 20,
        width: 20,
        marginLeft: 5,
        
    }

});

export default ShoppingBag;
