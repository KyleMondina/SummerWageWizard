import * as React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import Colors from '../Styles/Colors'

const Item = ({time, jobId, date, _id, jobName,navigation}) => (
    <Pressable 
        style = {{backgroundColor:Colors.primary}}
        onPress = {()=>{
            navigation.navigate("DetailedWorkLog",{
                jobName:jobName,
                time:time,
                date:date
            })
        }}
    >
        <Text>{jobName}</Text>
        <Text>{JSON.stringify(date)}</Text>
        <Text>{time}</Text>
    </Pressable>
)

const worklogs = [
    {
        time:3,
        jobId:4,
        date:5,
        _id:1,
        jobName:'Cookies'
    },
    {
        time:3,
        jobId:4,
        date:5,
        _id:2,
        jobName:'Cookies2'
    },
    {
        time:3,
        jobId:4,
        date:5,
        _id:3,
        jobName:'Cookies3'
    },
]

const WorkLogsList = ({navigation})=>{

    const renderItem = ({ item }) => (
        <Item time={item.time} jobId = {item.jobId} date = {item.date} _id = {item._id} jobName = {item.jobName} navigation={navigation}/>
    )

    return(
        <View>
            <Text>Parent</Text>
            <FlatList
                data={worklogs}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
            <Pressable
                onPress={()=>{navigation.navigate('Child')}}
            >
                <Text>Child</Text>
            </Pressable>
        </View>
    )
}

export default WorkLogsList