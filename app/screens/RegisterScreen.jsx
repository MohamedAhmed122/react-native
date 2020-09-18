import React, { Fragment } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

import Constants from "expo-constants";
import * as Yup from "yup";
import AppInputField from "../Components/Field/AppInputField";
import SubmitButton from "../Components/Field/SubmitButton";
import AppForm from "../Components/Field/AppForm";



const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.screen}>
        <AppForm
            initialValues={{ email: "", password: "", name: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <Fragment>
            <AppInputField
                autoCorrect={false}
                icon="account"
                placeholder="Name"
                textContentType="name"
                name="name"
            />
            <AppInputField
                autoCorrect={false}
                icon="email"
                name="email"
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppInputField
                placeholder="password"
                secureTextEntry
                autoCapitalize="none"
                name="password"
                icon="lock"
                textContentType="password"
            />
            <SubmitButton title="register" />
            </Fragment>
        </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    marginTop: 40,
  },

  btnOverride: {
    marginTop: 15,
  },
});
