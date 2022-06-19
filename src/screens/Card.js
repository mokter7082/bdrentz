import { View, Text, ImageBackground,Image, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBgImage from "../images/loginBg.jpg";
import BottomNavigation from '../components/component/Bottom-navigation';
import loginIcon from "../images/loginIcon.png";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import BtnEquipment from '../components/button/Btn-equipment';


export default function Card() {
  return (
    <View style={styles.container}>
    <View style={styles.excavatorTopCotainer}>
       <ImageBackground source={HeaderBgImage} resizeMode="cover" style={{flex:1}}>
           <View style={styles.titleContainer}>
              <View>
                <Text style={styles.hireTitle}>THE LARGEST </Text>
                <Text style={styles.hireTitle}>EQUIPMENT RENTAL NETWORK</Text>
              </View>
              <View style={styles.logoArea}>
                <Image style={styles.loginIcon} source={loginIcon} />
            </View>
           </View>
          
       </ImageBackground>
    </View>
     <View style={styles.cardMainArea}>
        <View>
            <Text style={styles.cardTitle}>Rent your Equipment</Text>
        </View>
         <View style={styles.warningIcon}>
           <Entypo name="warning" size={100} color="gray" />
           <Text style={styles.cardTitle}>You Have Not Added</Text>
           <Text style={styles.cardTitle}>Any Equipment Yet</Text>
         </View>
         <View style={styles.addBtn}>
            <BtnEquipment
                onPress={() => handleSubmit()}
                label="Add Equipmet"
                bgColor="#f6921e"
                color="#fff"
            />
        </View>
    </View>

      {/* <View style={styles.quotationBottomArea}>
            <BottomNavigation />
     </View> */}
</View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
       },
       excavatorTopCotainer:{
         flex:0.6,
         borderBottomRightRadius:40,
         borderBottomLeftRadius:40,
         overflow:"hidden"
       },
     
       titleContainer:{
           flex:1,
        //    justifyContent:"center",
           alignItems:"center",
           marginTop:"40%"
       },
       hireTitle:{
           fontSize:20,
           textAlign:"center",
           color:"#fff",
           
       },
       quotationBottomArea:{
            flex: 0.1,
            flexDirection:"row",
            alignItems:"flex-end",
            justifyContent:"space-around",
            backgroundColor:"#fff",
        }, 
        cardMainArea:{
            flex:1,
           justifyContent:"space-around",
           alignItems:"center"
        },
        loginIcon: {
            width: 51,
            height: 44,
          },   
        logoArea:{
            marginTop:"20%"
        },
        productImage:{
            height:100,
            width:100
        },
        cardArea:{
            paddingLeft:15,
            paddingRight:15,
            marginTop:10,
            gap:20,
  
        },
        warningIcon:{
            justifyContent:"center",
            alignItems:"center"
        },
        cardTitle:{
            color:"gray",
            fontSize:20
        },
   
     
 
    

    
        

})