import React from 'react'
import { StyleSheet, Text, View, SafeAreaView ,FlatList} from 'react-native'
import {primary , secondary, lightGray, white} from '../config/Color'
import ListItem from '../Components/ListItem'
import Constants from 'expo-constants'
import Icons from '../Components/Icons'
import ListItemDivider from '../Components/ListItemDivider'


export default function AccountScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Mohamed Youssef'
                    subTitle='mohamed@smartdev.com'
                    image={require('../../assets/person.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemDivider}
                    renderItem={({item})=>(
                        <ListItem
                            title={item.title}
                            IconComponent={<Icons  name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                        />)
                    }
                >

                </FlatList>
            </View>
            <View style={styles.container}>
                <ListItem
                title='Logout'
                IconComponent={<Icons  name="logout" backgroundColor='#ffe66d'/>}
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
screen:{
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: lightGray
},
container:{
    marginTop: 20,
    backgroundColor: white 
}
})

const menuItems=[
    {
        title: 'My Listings',
        icon:{
            name: 'format-list-bulleted',
            backgroundColor: primary,
        }
    },
    {
        title: 'My Messages',
        icon:{
            name: 'email',
            backgroundColor: secondary,
        }
    },
    
]