import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import AppPicker from '../Components/AppPicker'
import AppInputText from '../Components/AppInputText'

const categories =[
    {id: 1, label: 'Jackets', value:1},
    {id: 2, label: 'Men',   value:2  },
    {id: 3, label: 'Women', value: 3},
    {id: 4, label: 'Sneakers', value:4},
    {id: 5, label: 'Hats', value:5},
]

export default function PickerScreen({name}) {

    const [category, setCategory] = useState(categories[0])

    return (
        <SafeAreaView>
        <AppPicker  
            placeholder='Email'  
            items={categories}
            selectedItem={category}
            onSelected={setCategory}
            icon='apps'
            name={name}
          />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
