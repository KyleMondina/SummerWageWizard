import * as React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'

const DetailedWorkLog = ({navigation})=>{
    return(
        <View>
            <Text>Parent</Text>
            <Pressable
                onPress={()=>{navigation.navigate('Parent')}}
            >
                <Text>Parent</Text>
            </Pressable>
        </View>
    )
}

export default DetailedWorkLog