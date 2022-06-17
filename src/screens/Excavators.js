import { View, Text, ImageBackground,Image, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBgImage from "../images/loginBg.jpg";
import BottomNavigation from '../components/component/Bottom-navigation';
import loginIcon from "../images/loginIcon.png";
import { AntDesign } from '@expo/vector-icons'; 


export default function Excavator() {
  return (
    <View style={styles.container}>
    <View style={styles.excavatorTopCotainer}>
       <ImageBackground source={HeaderBgImage} resizeMode="cover" style={{flex:1}}>
           <View style={styles.titleContainer}>
              <View>
                <Text style={styles.hireTitle}>EXAVATOR</Text>
              </View>
              <View style={styles.logoArea}>
                <Image style={styles.loginIcon} source={loginIcon} />
            </View>
           </View>
          
       </ImageBackground>
    </View>
     <View style={styles.exvatorMainArea}>
        <View style={styles.cardArea}>
           <View>
            <Image style={styles.productImage}
                    source={{
                    uri: 'https://bdrentz.com/media/photos/Admin/2/2_5.jpeg',
                    }}/>  
           </View>
           <View style={styles.productArea}>
              <View>
                    <Text style={styles.pTitle}>Excavator: Bucket Size 1.3</Text>  
                    <Text style={styles.pTitle}>Brand Name: Brand Name</Text>  
                    <Text style={styles.pTitle}>Model Year</Text>  
              </View>
              <View style={styles.rating}>
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="gray" />
              </View>
           </View>
        </View>
        <View style={styles.cardBorder}></View>

        <View style={styles.cardArea}>
           <View>
            <Image style={styles.productImage}
                    source={{
                    uri: 'https://bdrentz.com/media/photos/Admin/2/2_5.jpeg',
                    }}/>  
           </View>
           <View style={styles.productArea}>
              <View>
                    <Text style={styles.pTitle}>Excavator: Bucket Size 1.3</Text>  
                    <Text style={styles.pTitle}>Brand Name: Brand Name</Text>  
                    <Text style={styles.pTitle}>Model Year</Text>  
              </View>
              <View style={styles.rating}>
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="gray" />
              </View>
           </View>
        </View>
        <View style={styles.cardBorder}></View>

        <View style={styles.cardArea}>
           <View>
            <Image style={styles.productImage}
                    source={{
                    uri: 'https://bdrentz.com/media/photos/Admin/2/2_5.jpeg',
                    }}/>  
           </View>
           <View style={styles.productArea}>
              <View>
                    <Text style={styles.pTitle}>Excavator: Bucket Size 1.3</Text>  
                    <Text style={styles.pTitle}>Brand Name: Brand Name</Text>  
                    <Text style={styles.pTitle}>Model Year</Text>  
              </View>
              <View style={styles.rating}>
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="gray" />
              </View>
           </View>
        </View>
        <View style={styles.cardBorder}></View>

        <View style={styles.cardArea}>
           <View>
            <Image style={styles.productImage}
                    source={{
                    uri: 'https://bdrentz.com/media/photos/Admin/2/2_5.jpeg',
                    }}/>  
           </View>
           <View style={styles.productArea}>
              <View>
                    <Text style={styles.pTitle}>Excavator: Bucket Size 1.3</Text>  
                    <Text style={styles.pTitle}>Brand Name: Brand Name</Text>  
                    <Text style={styles.pTitle}>Model Year</Text>  
              </View>
              <View style={styles.rating}>
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="#f6921e" />
                <AntDesign name="star" size={24} color="gray" />
              </View>
           </View>
        </View>
        <View style={styles.cardBorder}></View>
    </View>
      <View style={styles.quotationBottomArea}>
            <BottomNavigation />
     </View>
</View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
       },
       excavatorTopCotainer:{
         flex:0.8,
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
        exvatorMainArea:{
            flex:1,
            marginTop:10
        },
        loginIcon: {
            width: 51,
            height: 44,
          },   
        logoArea:{
            marginTop:"25%"
        },
        productImage:{
            height:100,
            width:100
        },
        cardArea:{
            paddingLeft:15,
            paddingRight:15,
            marginTop:10,
            flexDirection:"row",
            gap:20,
            height:100,
       
        },
        cardBorder:{
          width:"100%",
          borderBottomColor:"gray",
          borderBottomWidth:1,
          marginTop:10
        },
        pTitle:{
            fontSize:18
        },
        rating:{
            flexDirection:"row",
            gap:5
        },
        productArea:{
            paddingTop:5,
            paddingBottom:5
        }
        

})