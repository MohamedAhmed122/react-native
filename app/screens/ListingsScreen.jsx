import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import Constants from 'expo-constants'
import ListItem from '../Components/ListItem'
import ListItemDivider from '../Components/ListItemDivider'
import Card from '../Components/Card'
import { gray, lightGray } from '../config/Color'



export default function ListingsScreen() {
    return (
        <View style={styles.screen}>
            <FlatList
                data={Listings}
                keyExtractor={Listing => Listing.id.toString()}
                ItemSeparatorComponent={ListItemDivider}
                renderItem={({item}) =>( 
                <Card  
                    title={item.title}
                    subTitle={item.price + '$'}
                    image={item.image}
                />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
screen:{
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: lightGray,
    padding: 20
}
})


const Listings=[
    {
        id: 1,
        title: 'black Snakers For Sale',
        price: 100,
        image: require('../../assets/product1.png')
    },
    {
        id: 2,
        title: 'black Jackets For Sale',
        price: 250,
        image: require('../../assets/product2.png')
    },
    {
        id: 3,
        title: 'Jeans Jackets For Sale',
        price: 70,
        image: require('../../assets/product3.png')
    },
    {
        id: 4,
        title: 'Nice T-Shirt For Sale',
        price: 140,
        image: require('../../assets/product4.png')
    }
]