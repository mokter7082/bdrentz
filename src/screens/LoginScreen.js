import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import loginBgImage from "../images/loginBg.jpg";
import loginIcon from "../images/loginIcon.png";
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/button/Button'; 

export default function LoginScreen(props) {
    const handleSubmit = ()=>{
        props.navigation.navigate('Otp');  
     }
 
  return (
   <View style={styles.container}>
         <View style={styles.loginTopCotainer}>
            <ImageBackground source={loginBgImage} resizeMode="cover" style={{flex:1}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.loginTitle}>THE LARGEST</Text>
                    <Text style={styles.loginTitle}>EQUIPMENT RENTAL NETWORK</Text>
                </View>
            </ImageBackground>
         </View>
         <View style={styles.loginBottomCotainer}>
                <View style={styles.logBottomItem}>
                   <Image style={styles.loginIcon} source={loginIcon} />
                </View>
                <View style={styles.logBottomItem}>
                  <Text style={styles.CusloginTitle}>LOGIN AS CUSTOMAR</Text>
                </View>
                <View style={styles.logBottomItem}>
                   <TextInput style={styles.loginInput} placeholder="Enter your mobile number" />
                </View>
                <View style={styles.logBottomItem}>
                   <Button onPress={()=> handleSubmit()} style={styles.cusLogin} label="Next" bgColor="#f6921e" color="#fff" onPress={handleSubmit} />
                </View>
         </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    loginTopCotainer:{
      flex:0.8,
      borderBottomRightRadius:40,
      borderBottomLeftRadius:40,
      overflow:"hidden"
    },
    loginBottomCotainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      gap:30,
      paddingBottom:50
    },
    logBottomItem:{
      marginTop:30
    },
    titleContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    loginTitle:{
        fontSize:20,
        textAlign:"center",
        color:"#fff"
    },
    CusloginTitle:{
      fontSize:20,
      textAlign:"center",
      color:"#000"
    },
    loginIcon: {
        width: 51,
        height: 44,
      },
      loginInput:{
       backgroundColor:"#fff",
       height:55,
       width:280,
       fontSize:20,
       padding:20,
       borderRadius:10,
      }
})