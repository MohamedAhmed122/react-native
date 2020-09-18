import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { secondary } from "../../config/Color";
import AppButton from "../Button";

export default function SubmitButton({title}) {
 const {handleSubmit} = useFormikContext()

  return <AppButton title={title} colors={secondary} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
