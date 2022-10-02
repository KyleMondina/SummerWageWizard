import * as React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'

const WorkLogsList = ({navigation})=>{
    return(
        <View>
            <Text>Parent</Text>
            <Pressable
                onPress={()=>{navigation.navigate('Child')}}
            >
                <Text>Child</Text>
            </Pressable>
        </View>
    )
}

export default WorkLogsList