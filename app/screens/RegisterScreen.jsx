import React, { Fragment } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native'
import {Formik} from 'formik'
import Constants from 'expo-constants'
import AppButton from '../Components/Button'
import AppInputText from '../Components/AppInputText'
import * as Yup from 'yup'
import AppText from '../Components/AppText'
import ErrorMessages from '../Components/ErrorMessages'
import { secondary, primary } from '../config/Color'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password : Yup.string().required().min(4).label('Password'),
})

export default function RegisterScreen() {

    return (
        <SafeAreaView style={styles.screen}>
            <Formik
                initialValues={{email: '', password: '', name: ''}}
                onSubmit={(values) =>console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
                    <Fragment>
                        <AppInputText 
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='account'
                            onBlur={()=>setFieldTouched('name')}
                            placeholder='Name'
                            textContentType='name'
                            onChangeText={handleChange('name')}
                        />
                        {touched.name && <ErrorMessages error={errors.name} />}
                        <AppInputText 
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType="email-address"
                            onBlur={()=>setFieldTouched('email')}
                            placeholder='Email'
                            textContentType='emailAddress'
                            onChangeText={handleChange('email')}
                        />
                        {touched.email && <ErrorMessages error={errors.email} />}
                        <AppInputText
                            placeholder='password'
                            secureTextEntry
                            autoCapitalize='none'
                            onBlur={()=>setFieldTouched('password')}
                            autoCorrect={false}
                            icon='lock'
                            textContentType='password'
                            onChangeText={handleChange('password')}
                        />
                        {touched.password &&<ErrorMessages error={errors.password} />}
                        <AppButton 
                            style={styles.btnOverride} 
                            title='Register' 
                            colors={secondary}
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
    flex: 1,
    marginTop: 40,
    
},

btnOverride:{
    marginTop: 15,
}
})
