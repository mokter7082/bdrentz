import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import loginBgImage from "../images/loginBg.jpg";
import loginIcon from "../images/loginIcon.png";
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/button/Button';


export default function Login(props) {
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
                <View>
                   <Image style={styles.loginIcon} source={loginIcon} />
                </View>
                <View>
                  <Text>LOGIN AS CUSTOMAR</Text>
                </View>
                <View>
                   <TextInput style={styles.loginInput} placeholder="Enter your mobile number" />
                </View>
                <View>
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
      flex:0.5,
      borderBottomRightRadius:40,
      borderBottomLeftRadius:40,
      overflow:"hidden"
    },
    loginBottomCotainer:{
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
    loginTitle:{
        fontSize:20,
        textAlign:"center",
        color:"#fff"
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