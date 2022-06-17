import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'
import HeaderBgImage from "../images/loginBg.jpg";
import loginIcon from "../images/loginIcon.png";
import Button from '../components/button/Button';

export default function Otp(props) {
    const handleSubmit = ()=>{
        props.navigation.navigate('HireNow');  
     }
  return (
    <View style={styles.container}>
    <View style={styles.otpTopCotainer}>
       <ImageBackground source={HeaderBgImage} resizeMode="cover" style={{flex:1}}>
           <View style={styles.titleContainer}>
               <Text style={styles.otpTitle}>THE LARGEST</Text>
               <Text style={styles.otpTitle}>EQUIPMENT RENTAL NETWORK</Text>
           </View>
       </ImageBackground>
    </View>
    <View style={styles.otpBottomCotainer}>
           <View>
              <Image style={styles.loginIcon} source={loginIcon} />
           </View>
           <View>
             <Text style={styles.otpCodeTitle}>VERIFY YOUR OTP</Text>
           </View>
           <View>
              <TextInput style={styles.otpInput}/>
           </View>
           <View style={{flex:0.2,flexDirection:"row"}}>
             <Text style={styles.otpCodeTitle}>disn't get OTP yet, </Text>
             <Text  style={styles.otpCodecolor}>RESEND OTP</Text>
           </View>
           <View>
              <Button onPress={()=> handleSubmit()} style={styles.cusLogin} label="LOGIN" bgColor="#f6921e" color="#fff" onPress={handleSubmit} />
           </View>
    </View>
</View>
  )
}


const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    otpTopCotainer:{
      flex:0.5,
      borderBottomRightRadius:40,
      borderBottomLeftRadius:40,
      overflow:"hidden"
    },
    otpBottomCotainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      gap:30,
      paddingBottom:100
    },
    titleContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    otpTitle:{
        fontSize:20,
        textAlign:"center",
        color:"#fff"
    },
    loginIcon: {
        width: 51,
        height: 44,
      },
      otpCodeTitle:{
        color:"gray",
        fontSize:20,
        fontWeight:"bold"
      },
       otpInput:{
       backgroundColor:"#fff",
       height:55,
       width:280,
       borderRadius:7,
      },
      otpCodecolor:{
        color:"#f6921e",
        fontSize:20,
        fontWeight:"bold"
      }
})