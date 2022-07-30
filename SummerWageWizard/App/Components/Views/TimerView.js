import * as React from 'react'
import { Text, View, Button } from 'react-native';

const TimerView = ({seconds,minutes,hours})=>{
    return(
        <View style={{ display: 'flex', flexDirection: 'row', padding: '2%', alignItems: 'center' }}>
            <Text>Timer:</Text>
            <Text> {hours}: {minutes}: {seconds}</Text>
        </View>   
    )
}

export default TimerView
