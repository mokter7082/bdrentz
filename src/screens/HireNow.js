import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderBgImage from "../images/loginBg.jpg";
import { AntDesign as Icon, Entypo, Fontisto } from "@expo/vector-icons";
import Button from "../components/button/Button";
import BottomNavigation from "../components/component/Bottom-navigation";
import BtnEquipment from "../components/button/Btn-equipment";

export default function HireNow(props) {
  const handleSubmit = () => {
    props.navigation.navigate("Quotation");
  };
  return (
    <View style={styles.container}>
        <View style={styles.hireTopCotainer}>
          <ImageBackground
            source={HeaderBgImage}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.hireTitle}>THE LARGEST</Text>
              <Text style={styles.hireTitle}>EQUIPMENT RENTAL NETWORK</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.hireMiddleCotainer}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.hireTitle}>HIRE NOW</Text>
          </View>
        
          <View style={styles.hireInputContainer}>
            <Icon
              name="search1"
              size={25}
              color="gray"
              style={styles.inputIcon}
            />
            <TextInput style={styles.hireInput} placeholder="Equipment Name" />
          </View>
          <View style={styles.hireInputContainer}>
            <Entypo
              name="location-pin"
              size={25}
              color="gray"
              style={styles.inputIcon}
            />
            <TextInput style={styles.hireInput} placeholder="job Location" />
          </View>
          <View style={styles.hireInputContainer}>
            <Fontisto
              name="date"
              size={25}
              color="gray"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.hireInput}
              type="date"
              placeholder="Start Date"
            />
          </View>
          <View style={styles.hireInputContainer}>
            <Fontisto
              name="date"
              size={25}
              color="gray"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.hireInput}
              type="date"
              placeholder="End Date"
            />
          </View>
          <View style={styles.bookBtnContainer}>
            <BtnEquipment
              onPress={() => handleSubmit()}
              style={styles.bookButton}
              label="BOOK NOW"
              bgColor="#f6921e"
              color="#fff"
            />
          </View>
          </ScrollView>
        </View>
        {/* <View style={styles.hireBottomArea}>
           <BottomNavigation />
        </View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6921e",
  },
  scrollView: {
    width:"100%",
    marginBottom:50
  },
  hireTopCotainer: {
    flex: 0.6,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  hireMiddleCotainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    width:"100%",
    marginLeft:20,
    marginRight:20,
    width:"90%"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hireTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  hireInputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    // borderRadius: 10,
    width:"100%",
    marginTop:25,
  },
  hireInput: {
    width: "100%",
    height: 55,
    paddingLeft: 10,
    fontSize: 15,
    color: "gray",
    borderRadius:10
  },
  inputIcon: {
    paddingTop: 13,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    borderRightColor: "gray",
    borderRightWidth: 1,
  },
  bookBtnContainer: {
    marginTop: 35,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    width:200,
    marginLeft:"25%"
  },
  bottomLogo: {
    width: 50,
    height: 50,
  },
  hireBottomArea: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  middleLogo: {
    backgroundColor: "#dfe6e9",
    padding: 10,
    borderRadius: 50,
  },
});
