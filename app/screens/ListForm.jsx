import React, {Fragment} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import AppPicker from '../Components/AppPicker'
import AppButton from '../Components/Button'
import AppInputText from '../Components/AppInputText'
import {Formik} from 'formik'
import * as Yup from 'yup'
import ErrorMessages from '../Components/ErrorMessages'
import PickerScreen from './PickerScreen'
import { secondary } from '../config/Color'


const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description : Yup.string().required(),
    price: Yup.string().required(),
})

export default function ListForm() {
    return (
        <SafeAreaView style={styles.screen}>
            <Formik
                initialValues={{title: '',description:'', price: ''}}
                onSubmit={(values) =>console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
                    <Fragment>
                        <AppInputText 
                            autoCapitalize='none'
                            autoCorrect={false}
                            onBlur={()=>setFieldTouched('title')}
                            placeholder='Title'
                            onChangeText={handleChange('title')}
                        />
                        {touched.title && <ErrorMessages error={errors.title} />}
                        <AppInputText
                            placeholder='Price'
                            autoCapitalize='none'
                            onBlur={()=>setFieldTouched('price')}
                            autoCorrect={false}
                            onChangeText={handleChange('price')}
                        />
                        {touched.price &&<ErrorMessages error={errors.price} />}
                        <PickerScreen />
                        <AppInputText
                            placeholder='Description'
                            autoCapitalize='none'
                            onBlur={()=>setFieldTouched('description')}
                            autoCorrect={false}
                            onChangeText={handleChange('description')}
                        />
                        {touched.description &&<ErrorMessages error={errors.description} />}
                        <AppButton 
                            style={styles.btn} 
                            title='Post' 
                            onPress={handleSubmit} 
                        />
                    </Fragment>
                )}
            </Formik>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
screen:{
    paddingTop: Constants.statusBarHeight,
    flex: 1
},
btn:{
    backgroundColor: 'yellow'
}
})
