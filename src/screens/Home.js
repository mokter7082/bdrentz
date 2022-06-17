import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import logoImage from "../images/bdrentz.png";
import backgroundImage from "../images/background.jpg";



export default function Home(props) {

    const handleSubmit = ()=>{
       props.navigation.navigate('Login');  
    }

  return (
    <View style={styles.container}>
    <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex:1}}>
            <View style={styles.headerTopArea}>
                <View>
                   <Image style={styles.logo} source={logoImage} />
                </View>   
                <View>
                    <Text style={styles.headerTitle}>THE LARGEST</Text>
                    <Text style={styles.headerTitle}>EQUIPMENT RENTAL NETWORK</Text>
                </View>   
            </View>
            <View style={styles.headerButtomArea}> 
                 <View style={styles.buttonContainer}>
                   <Button onPress={()=> handleSubmit()} style={styles.cusLogin} label="LOGIN AS CUSTOMAR" bgColor="#f6921e" color="#fff" onPress={handleSubmit} />
                   <Button label="LOGIN AS VENDOR" bgColor="#fff" color="#000" onPress={()=> handleSubmit()} />
                 </View> 
            </View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerTopArea:{
        flex:0.7,
        justifyContent:"center",
        backgroundColor:"#fff",
        alignItems:"center",
        borderBottomEndRadius:40,
        borderBottomStartRadius:40,
        gap:30
    },
    headerButtomArea:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
       gap:35
    },
    headerTitle:{
       fontSize:20,
       textAlign:"center"
    },
    logo: {
        width: 150,
        height: 80,
      },
})