import React, { Fragment, useState, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign as Icon } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import logo from "../images/logo.png";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const password = useRef(null);
  const [err, setErr] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  //formik initialize and form handle
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: "", password: "" },
      onSubmit: (values) => {
        handleLogin(values);
      },
    });

  //Login handler
  const handleLogin = async (values) => {
    await axios
      .post("/login", values)
      .then(async (response) => {
        if (response.status == 200) {
          await AsyncStorage.setItem("token", response.data.token, () => {
            setAccessToken(response.data);
          });
        } else {
          setErr(true);
        }
      })
      .catch((error) => {
        setErr(error.data);
      });
  };

  //set access token on storage
  const setAccessToken = (response) => {
    dispatch(setToken(response));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image source={logo} style={styles.logo}  />
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>
      <View style={styles.form}>
        <Fragment>
          {err ? (
            <View style={styles.formGroup}>
              <Text style={styles.errText}>Username and Password mismatch</Text>
            </View>
          ) : (
            ""
          )}
        </Fragment>
        <View style={styles.formGroup}>
          <TextInput
            icon="mail"
            placeholder="Enter your email or phone"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
          />
        </View>
        <View style={styles.formGroup}>
          <TextInput
            icon="key"
            placeholder="Enter your password"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="go"
            returnKeyLabel="go"
            ref={password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button label="Login" onPress={handleSubmit} />
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <Text style={styles.helpText}>
          Don't have an account yet? Register now
        </Text>
        <Text style={styles.helpText}> Forgot your password? </Text>
        <Text style={styles.helpText}>
          <Icon name="customerservice" size={24} color="black" /> Sign in to
          continue
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: 10,
  },
  logoArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 15,
    width: 200,
    height: 112,
  },
  subText: {
    backgroundColor: "rgba(96, 194, 172, 0.10)",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 15,
    marginBottom: 15,
    fontSize: 14,
    lineHeight: 20,
    color: "#606564",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    paddingHorizontal: 32,
    marginBottom: 16,
    width: "100%",
  },
  buttonGroup: {
    justifyContent: "center",
    paddingHorizontal: 32,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
  helpText: {
    color: "#838487",
    fontSize: 14,
    textDecorationLine: "underline",
    textAlign: "center",
    alignItems: "center",
    margin: 5,
  },
  errText: {
    fontSize: 16,
    color: "#f00",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    backgroundColor: "#ffd5d5",
    padding: 10,
    borderRadius: 10,
  },
});
