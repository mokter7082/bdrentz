import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'
import HeaderBgImage from "../images/loginBg.jpg";
import loginIcon from "../images/loginIcon.png";
import Button from '../components/button/Button';


import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice"; 


export default function Otp(props) {

  const dispatch = useDispatch();

  const handleSubmit = ()=>{ 
    setAccessToken({token:'hello'})
    // props.navigation.navigate('HireNow');  
  }


  //set access token on storage
  const setAccessToken = (response) => {
    dispatch(setToken(response));
  };


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
           <View style={styles.otpBottomItem}>
              <Image style={styles.loginIcon} source={loginIcon} />
           </View>
           <View style={styles.otpBottomItem}>
             <Text style={styles.otpCodeTitle}>VERIFY YOUR OTP</Text>
           </View>
           <View style={styles.otpBottomItem}>
              <TextInput style={styles.otpInput}/>
           </View>
           <View style={{flex:0.2,flexDirection:"row",marginTop:30}}>
             <Text style={styles.otpCodeTitle}>disn't get OTP yet, </Text>
             <Text  style={styles.otpCodecolor}>RESEND OTP</Text>
           </View>
           <View style={styles.otpBottomItem}>
              <Button onPress={()=> handleSubmit()}  label="LOGIN" bgColor="#f6921e" color="#fff"/>
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
      flex:0.8,
      borderBottomRightRadius:40,
      borderBottomLeftRadius:40,
      overflow:"hidden"
    },
    otpBottomCotainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      paddingBottom:50
    },
    otpBottomItem:{
      marginTop:30,
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