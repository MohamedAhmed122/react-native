import React, { useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../Components/ListItem'


import Constants from 'expo-constants'
import ListItemDivider from '../Components/ListItemDivider'
import ListItemDelete from '../Components/ListItemDelete'
import {lightGray, danger} from '../config/Color'


export default function MessagesScreen() {

const initialState =[
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/person.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/person.png')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../../assets/person.png')
    },
]

const [items, setItems] =useState(initialState)

const handleDeleteMsg =(message)=>{
    setItems(items.filter(item =>  item.id !== message.id))
}
return (
    <SafeAreaView style={styles.screen} >
        <FlatList
            data={items}
            keyExtractor={items => items.id.toString()}
            renderItem={({item}) =>
                <ListItem 
                    image={item.image}
                    title={item.title} 
                    subTitle={item.description} 
                    onPress={()=> console.log('Selected', item)}
                    renderRightActions={() =>
                        <ListItemDelete onPress={()=> handleDeleteMsg(item)} />}
                />
            }
            ItemSeparatorComponent={ListItemDivider}
        />
    </SafeAreaView>
)
}


const styles = StyleSheet.create({
screen:{
    paddingTop: Constants.statusBarHeight
},
divider:{
    width: '100%', 
    height: 1,
    backgroundColor: lightGray,
},
renderRight:{
    backgroundColor: danger,
    width: 75,
}
})




