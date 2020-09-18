import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInputText from "../AppInputText";
import ErrorMessages from "./ErrorMessages";
import { useFormikContext } from "formik";

export default function AppInputField({name ,...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <Fragment>
            <AppInputText
                autoCapitalize="none"
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            {touched[name] && <ErrorMessages error={errors[name]} />}
        </Fragment>
  );
}

const styles = StyleSheet.create({});
