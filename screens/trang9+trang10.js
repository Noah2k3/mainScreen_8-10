import React from "react";
import { ScrollView, View, Text, ImageBackground, StyleSheet, Image} from "react-native";

const ShopScreen = () => {
    return(
            <ScrollView>
                <View style={styles.statusbar}>
                    <Image source={require('../assets/option.png')}
                    style={styles.optionIcon}></Image>
                    <Text style={{marginLeft: 150, marginTop: 30, fontSize: 20}}>Shop</Text>
                    <Image source={require('../assets/bagIcon.png')}
                    style={styles.bagIcon}></Image>
                </View>


                <View style={styles.clothing}>
                    <ImageBackground source={require('../assets/clothing.png')}
                    style={styles.img}>
                    <Text style={{alignItems: 'center', fontSize: 30, color: 'white'}}>Clothing</Text>
                    </ImageBackground>
                </View>
            </ScrollView>
    );
}

const styles=StyleSheet.create({
   img:{
       marginTop: 10,
        height: 200,
        width: 420,
        borderRadius: 10,
        
    },

    statusbar:{
        flexDirection: 'row',
        marginTop: 20,
    },

    optionIcon:{
        marginTop: 30,
        height: 30,
        width: 30,
        marginLeft: 20,
    },

   bagIcon:{
        marginTop: 30,
        height: 30,
        width: 30,
        marginLeft: 150,
    },

    clothing:{
        marginHorizontal: 30,
        marginVertical: 30,
    },

    
  
});



export default ShopScreen;