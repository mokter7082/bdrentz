import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import HeaderBgImage from "../images/loginBg.jpg";
import { AntDesign } from "@expo/vector-icons";
import BottomNavigation from "../components/component/Bottom-navigation";
import BtnEquipment from "../components/button/Btn-equipment";
import { TextInput } from "react-native-gesture-handler";

export default function Quotation(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmit = () => {
    setModalVisible(!modalVisible);
    props.navigation.navigate("DraftQuotation");
  };
  return (
    <SafeAreaView style={styles.container}>
     
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
        <View style={styles.quotationArea}>
       
          <View style={{width:"100%"}}>
            <Text style={styles.quotTitle}>Quotation</Text>
          </View>
          <View style={styles.equipment}>
            <View style={{width:"50%"}}>
              <Text style={styles.equTitle}>Equipment-1</Text>
            </View>
            <View style={{width:"50%",alignItems:"flex-end"}}>
              <AntDesign name="delete" size={30} color="red" />
            </View>
          </View>
          <View style={styles.tableContainer}>
            <Modal
              animationType="slide"
              animationIn={"slideInLeft"}
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPressOut={() => setModalVisible(!modalVisible)}
              >
                <TouchableWithoutFeedback>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.close}>
                        <AntDesign
                          onPress={() => setModalVisible(!modalVisible)}
                          name="close"
                          size={24}
                          color="black"
                        />
                      </View>
                      <View>
                        <TextInput
                          placeholder="Enter Your Name"
                          style={styles.modalInput}
                        />
                      </View>
                      <View>
                        <TextInput
                          placeholder="Enter Your Name"
                          style={styles.modalInput}
                        />
                      </View>
                      <View style={styles.modalFooter}>
                        <Pressable>
                          <BtnEquipment
                            onPress={() => handleSubmit()}
                            style={styles.cusLogin}
                            label="BOOK NOW"
                            bgColor="#f6921e"
                            color="#fff"
                          />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </TouchableOpacity>
            </Modal>


            <ScrollView style={styles.scrollView}>
            <View style={styles.rowItem}>
              <Text>Equipment Name</Text>
              <Text>Equipment Vally100 ton</Text>
            </View>
            <View style={styles.rowItem}>
              <Text>Standered for 240/Month(equipment)</Text>
              <Text>1300000</Text>
            </View>
            <View style={styles.daysCount}>
              <View style={styles.rowItem}>
                <Text>Working Days</Text>
                <Text>- 1 +</Text>
              </View>
              <View style={styles.rowItem}>
                <Text>Job Location</Text>
                <Text>Chittogong</Text>
              </View>
            </View>
            <View style={styles.daysCount}>
              <View style={styles.rowItem}>
                <Text>Start Date</Text>
                <Text>10/01/2022</Text>
              </View>
              <View style={styles.rowItem}>
                <Text>End Date</Text>
                <Text>10/06/2022</Text>
              </View>
            </View>
            <View style={styles.rowItem}>
              <Text>Total Amount for Equipment</Text>
              <Text>216666</Text>
            </View>
            <View style={styles.rowItem}>
              <Text>Operation fooding cost</Text>
              <Text>3,000</Text>
            </View>
            <View style={styles.rowItem}>
              <Text>Movement Lowbed Cost, insallation cost</Text>
              <Text> At Actual</Text>
            </View>

         
   
            <View style={styles.quotationButton}>
             <View style={{width:"48%"}}>
              <BtnEquipment
                  onPress={() => handleSubmit()}
                  label="ADD MORE EQUIPMENT"
                  bgColor="#f6921e"
                  color="#fff"
                  fontSize={10}
                />
             </View>
            <View style={{width:"48%"}}>
              <BtnEquipment
                  onPress={() => setModalVisible(true)}
                  fontSize={10}
                  label="BOOK NOW"
                  bgColor="#07CC01"
                  color="#fff"
                />
            </View>
            </View>
            </ScrollView>
          </View>
        </View>
        {/* <BottomNavigation /> */}
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingBottom: 50,
  },
  modalContainer: {
    flex: 1,
  },
  quotationTopCotainer: {
    flex: 0.6,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  quotationArea: {
    flex: 1,
    alignItems: "center",
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
  quotationBottomArea: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  quotTitle: {
    fontSize: 24,
    color: "#f6921e",
    textAlign:"center",
    width:"100%",
    marginTop:15
  },
  equipment: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#dcdde1",
    borderBottomWidth: 1,
  },
  equTitle: {
    fontSize: 20,
    color: "red",
    marginBottom: 10,
  },
  tableContainer: {
    flex: 1,
    width: "100%",
    gap: 15,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  daysCount: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  quotationButton: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "90%",
    height: "50%",
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "relative",
  },
  modalInput: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  modalFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  close: {
    position: "absolute",
    top: 22,
    right: 25,
  },
  rowItem:{
    marginTop:20
  },
});
