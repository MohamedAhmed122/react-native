import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View ,TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import { gray, lightGray } from '../config/Color';
import PickerItem from '../Components/PickerItem'
import ListItemDivider from './ListItemDivider';


export default function AppPicker({icon, items, placeholder,selectedItem, onSelected }) {
    const [visibleModel, setVisibleModel] =useState(false)

    const handleSelect =(item)=>{
        setVisibleModel(false);
        onSelected(item)
    }

    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={()=>setVisibleModel(true)}>
                <View style={styles.container}>
                    {icon &&  
                        <MaterialCommunityIcons 
                            style={{marginRight:5}} 
                            name={icon} 
                            size={25} 
                            color={gray}
                    /> }
                    <AppText style={{flex:1}} >
                        {selectedItem ? selectedItem.label :placeholder}
                    </AppText>
                    <MaterialCommunityIcons 
                        name='chevron-down' 
                        size={25} 
                        color={gray}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visibleModel} animationType='slide'>
                <SafeAreaView>
                    <Button title='close' onPress={()=>setVisibleModel(false)}/>
                    <FlatList 
                        ItemSeparatorComponent={ListItemDivider}
                        data ={items}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) =>
                        <PickerItem 
                            label={item.label}
                            onPress={()=>handleSelect(item)}
                        />
                    }
                    />
                </SafeAreaView>
            </Modal>
        </Fragment>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15 ,
    marginVertical: 10   
},
})
