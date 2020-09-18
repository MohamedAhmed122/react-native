import React, { Fragment } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import AppButton from '../Components/Button'
import AppInputText from '../Components/AppInputText'
import {Formik} from 'formik'
import * as Yup from 'yup'
import ErrorMessages from '../Components/ErrorMessages'
import AppText from '../Components/AppText'
import { secondary } from '../config/Color'


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
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) =>console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
                    <Fragment>
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
                            title='Login' 
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
