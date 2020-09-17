import React, { Fragment } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native'
import {Formik} from 'formik'
import Constants from 'expo-constants'
import AppButton from '../Components/Button'
import AppInputText from '../Components/AppInputText'

export default function LoginScreen() {

    return (
        <SafeAreaView style={styles.screen}>
            <Image 
            style={styles.logo}
            source={require('../../assets/logo.png')} />
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) =>console.log(values)}
            >
                {({handleChange, handleSubmit})=>(
                    <Fragment>
                        <AppInputText 
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType="email-address"
                            placeholder='Email'
                            textContentType='emailAddress'
                            onChangeText={handleChange('email')}
                        />
                        <AppInputText
                            placeholder='password'
                            secureTextEntry
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            textContentType='password'
                            onChangeText={handleChange('password')}
                        />
                        <AppButton 
                            style={styles.btnOverride} 
                            title='Login' 
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
