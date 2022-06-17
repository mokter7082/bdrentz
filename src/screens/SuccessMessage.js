import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  CheckBox,
  TextInput,
  ImageBackground,
} from "react-native";

import HeaderBgImage from "../images/loginBg.jpg";
import BottomNavigation from "../components/component/Bottom-navigation";
import { AntDesign } from "@expo/vector-icons";
import BtnEquipment from "../components/button/Btn-equipment";

export default function SuccessMessage() {
  const handleSubmit = () => {
    console.log("?");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.quotationTopCotainer}>
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
        <View style={styles.successArea}>
          <View>
            <AntDesign name="checkcircle" size={70} color="#00C13C" />
          </View>
          <View>
            <Text style={styles.thanks}>THANK YOU</Text>
            <Text>YOUR EQUIPMENT ADDED SUCCESSFULLY</Text>
          </View>
          <View style={styles.succMessageArea}>
            <Text style={styles.succMessage}>ONE FOR OUR REPRESNTATIVE</Text>
            <Text style={styles.succMessage}>WILL CONTACT YOU VERY SOON</Text>
          </View>
          <View style={styles.successBtn}>
            <BtnEquipment
              onPress={() => handleSubmit()}
              style={styles.cusLogin}
              label="MY EQUIPMENT LIST"
              bgColor="#f6921e"
              color="#fff"
            />
          </View>
        </View>

        <BottomNavigation />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  quotationTopCotainer: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
    minHeight: 200,
    marginBottom: 30,
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hireTitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },

  successArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 15,
  },
  thanks: {
    fontSize: 22,
    lineHeight: 35,
  },
  succMessageArea: {
    marginTop: 15,
  },
  succMessage: {
    color: "red",
    lineHeight: 20,
  },
  successBtn: {
    marginTop: 10,
  },
});
