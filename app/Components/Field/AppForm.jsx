import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

export default function AppForm({initialValues, onSubmit, validationSchema ,children}) {
return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {()=>(<>{children}</> )}
        {/* {() => { <Fragment> {children} </Fragment> }} */}
        {/* {children} */}
    </Formik>
);
}

const styles = StyleSheet.create({});