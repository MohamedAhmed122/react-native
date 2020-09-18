import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'
import ErrorMessages from '../Field/ErrorMessages'

export default function FormImage({name}) {
    const {setFieldValue, values, errors, touched } = useFormikContext()

    const handleRemove =(uri)=>{
        setFieldValue(name,[...values[name], uri])
    }
    
    const handleRemove =(uri)=>{
        setFieldValue(name,values[name].filter(image => image !== uri))
    }
    return (
        <View>
            <ListImages imageUris={values[name]} onAddImag={handleRemove} onRemoveImage={handleRemove} />
            {touched[name] && <ErrorMessages error={errors[name]} />}
        </View>
    )
}

const styles = StyleSheet.create({})



// const onAddImage =(uri)=>{
//     setImageUris([...imageUris, uri])
//   }

//   const handleRemove =(uri)=>{
//     setImageUris(imageUris.filter(image => image !== uri))
//   }