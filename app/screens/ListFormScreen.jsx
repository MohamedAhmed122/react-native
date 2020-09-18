import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import * as Yup from "yup";
import AppFormPicker from '../Components/Field/AppFormPicker';
import AppInputField from "../Components/Field/AppInputField";
import SubmitButton from "../Components/Field/SubmitButton";
import AppForm from "../Components/Field/AppForm";
import FormImage from '../Components/ImageCustomize/FormImage'

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.string().required(),
  category: Yup.string().required(''),
  images: Yup.array().min(1, 'At least insert one image')
});
const categories = [
  { id: 1, label: "Jackets", value: 1 },
  { id: 2, label: "Men", value: 2 },
  { id: 3, label: "Women", value: 3 },
  { id: 4, label: "Sneakers", value: 4 },
  { id: 5, label: "Hats", value: 5 },
];
export default function ListForm() {
  return (
    <SafeAreaView style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImage name='images'/>
        <AppInputField
          maxLength={225}
          autoCorrect={false}
          placeholder="Title"
          name="title"
        />
        <AppInputField placeholder="Price" autoCorrect={false} name="price" />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppInputField
          keyboardType='numeric'
          placeholder="Description"
          multiline
          autoCorrect={false}
          name="description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  btn: {
    backgroundColor: "yellow",
  },
});
