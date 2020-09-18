import React, { Fragment } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import AppButton from '../Components/Button'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { secondary } from '../config/Color'
import AppInputField from '../Components/Field/AppInputField'
import SubmitButton from '../Components/Field/SubmitButton'
import AppForm from '../Components/Field/AppForm'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password : Yup.string().required().min(4).label('Password'),
})

export default function LoginScreen() {

return (
    <SafeAreaView style={styles.screen}>
        <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')} />
        <AppForm
            initialValues={{email: '', password: ''}}
            onSubmit={(values) =>console.log(values)}
            validationSchema={validationSchema}
        >
            <AppInputField
                name='email' 
                placeholder='Email' 
                autoCorrect={false}
                icon='email'
                keyboardType="email-address"
                textContentType='emailAddress'
            />
            <AppInputField 
                name='password' 
                textContentType='emailAddress'
                secureTextEntry
                placeholder='Password'
                icon='lock'
            />
            <SubmitButton  title='Login'/>
        </AppForm>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
screen:{
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    
},
logo:{
    width:80,
    height:80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
},
btnOverride:{
    marginTop: 15,
}
})
