import {
  View,
  Text,
  CheckBox,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import HeaderBgImage from "../images/loginBg.jpg";
import { AntDesign } from "@expo/vector-icons";
import BottomNavigation from "../components/component/Bottom-navigation";
import BtnEquipment from "../components/button/Btn-equipment";
export default function DraftQuotation(props) {
  const handleSubmit = () => {
    props.navigation.navigate("BookingConfirm");
  };
  return (
    <View style={styles.container}>
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
      <View style={styles.draftQuotationArea}>
        <View>
          <Text style={styles.draftTitle}>Draft Quotation</Text>
        </View>
        <View style={styles.divLeft}>
          <Text>To</Text>
          <Text>Sahadat Hossain</Text>
        </View>
        <View style={styles.dateArea}>
          <Text>Date: 12th May, 2022</Text>
          <Text>Order_id: 12343553</Text>
        </View>
        <View style={styles.divLeft}>
          <Text>Dear Sir,</Text>
          <Text>
            Thank you for choosing us to serve your company. We Look forward
            with you again
          </Text>
        </View>
        <View style={styles.divLeft}>
          <Text style={styles.title}>Equipment-1</Text>
        </View>
        <View style={styles.divLeft}>
          <Text>Equipment Name</Text>
          <Text>All Terrian Crane: 100 ton</Text>
          <Text>----------------------</Text>
        </View>
        <View style={styles.divLeft}>
          <Text>note:</Text>
          <Text>This price is excluiding any VAT, AIT And TAX</Text>
          <Text>
            5% AIT and 15% VAT will be added with each invoice Mibilazation &AIT
            and 15% VAT will be added with each invoice Mibilazation order
            Confarmation
          </Text>
        </View>
        <View style={styles.divLeft}>
          <Text style={styles.title_1}>This is Draft Quotation</Text>
          <Text style={styles.title_2}>
            FINAL QUOTATION WILL BE SEND YOUR MAIL IN 24 HOURS
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox />
          <Text>I agree to all Trams and Condition</Text>
        </View>
        <View>
          <BtnEquipment
            onPress={() => handleSubmit()}
            style={styles.cusLogin}
            label="CONFIRM YOUR QUOTATION"
            bgColor="#f6921e"
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.quotationBottomArea}>
        <BottomNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  quotationTopCotainer: {
    flex: 0.5,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
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
  draftQuotationArea: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 80,
  },
  draftTitle: {
    fontSize: 25,
    color: "#f6921e",
    textTransform: "uppercase",
    marginTop: 15,
    textAlign: "center",
  },
  divLeft: {
    width: "100%",
    textAlign: "left",
  },
  dateArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "red",
    textTransform: "uppercase",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    lineHeight: 40,
  },
  title_1: {
    fontSize: 20,
    color: "red",
    textTransform: "uppercase",
  },
  title_2: {
    color: "red",
  },
  quotationBottomArea: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  checkboxContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
});
