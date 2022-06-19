import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import HeaderBgImage from "../images/loginBg.jpg";
import BottomNavigation from '../components/component/Bottom-navigation';
import { AntDesign } from '@expo/vector-icons'; 
import BtnEquipment from '../components/button/Btn-equipment';
import BtnBook from '../components/button/Btn-book';

export default function BookingConfirm() {
  return (
    <View style={styles.container}>
    <View style={styles.bookingTopCotainer}>
       <ImageBackground source={HeaderBgImage} resizeMode="cover" style={{flex:1}}>
           <View style={styles.titleContainer}>
               <Text style={styles.hireTitle}>THE LARGEST</Text>
               <Text style={styles.hireTitle}>EQUIPMENT RENTAL NETWORK</Text>
           </View>
       </ImageBackground>
    </View>
     <View style={styles.bookConfirmArea}>
        <View>
           <AntDesign name="checkcircle" size={100} color="#00C13C" />
        </View> 
        <View>
           <Text style={styles.thanks}>THANK YOU</Text>
           <Text style={{marginBottom:15}}>YOUR BOOKING HAS BEEN CONFIRMED</Text>
        </View>
        <View style={styles.bookBtn}>
          <BtnBook onPress={()=> handleSubmit()} style={styles.cusLogin} label="DOWONLOARD THS QUOTATION" bgColor="#00C13C" color="#fff"/>
        </View>
        <View style={styles.bookBtn}>
          <BtnBook onPress={()=> handleSubmit()} style={styles.cusLogin} label="EMAIL THIS QUOTATION" bgColor="#0074AA" color="#fff"/>
        </View>
        <View style={styles.gotoBtn}>
          <BtnBook onPress={()=> handleSubmit()} style={styles.cusLogin} label="GO TO MAIN PAGE" bgColor="#f6921e" color="#fff"/>
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
       bookingTopCotainer:{
         flex:0.8,
         borderBottomRightRadius:40,
         borderBottomLeftRadius:40,
         overflow:"hidden"
       },
     
       titleContainer:{
           flex:1,
           justifyContent:"center",
           alignItems:"center",
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
        bookConfirmArea:{
            flex:1,
            alignItems:"center",
            textAlign:"center",
            marginTop:30
        },
        thanks:{
            fontSize:22,
            lineHeight:35,
            textAlign:"center",
            marginTop:15
          },
        bookBtn:{
            marginBottom:10,
            marginTop:15
        },     
        gotoBtn:{
            marginTop:40
        }       
})