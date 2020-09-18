import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import ErrorMessages from "./ErrorMessages";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

export default function AppFormPicker({name, placeholder, items }) {
    const {setFieldValue, values, errors, touched } = useFormikContext()
    return (
        <Fragment>
            <AppPicker
                items={items}
                placeholder={placeholder}
                onSelected={(item)=>setFieldValue(name, item)}
                name={name}
                selectedItem={values[name]}
            />
            {touched[name] && <ErrorMessages error={errors[name]} />}
        </Fragment>
  );
}

const styles = StyleSheet.create({});