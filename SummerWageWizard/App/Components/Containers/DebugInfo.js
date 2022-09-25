import * as React from 'react'
import { useState } from 'react'
import {Modal,Text,View,Pressable} from 'react-native'

import { useSelector } from 'react-redux'
import { selectLocation } from '../../Redux/features/locationSlice'
import { selectSelectedJob } from '../../Redux/features/jobSlice'
import { selectIsTracking } from '../../Redux/features/trackSlice'
import withRealmData from '../Enhancers/withRealmData'
import { selectJobListUpdated } from '../../Redux/features/jobSlice'


const _DebugInfo = (props) =>{
    const [modalVisible,setModalVisible] = useState(false)
    const location = useSelector(selectLocation)
    const selectedJob = useSelector(selectSelectedJob)
    const isTracking = useSelector(selectIsTracking)
    const realmData = props.data
    return(
        <View>
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={()=>{
                    setModalVisible(!modalVisible)
                }}
            >
                <Text>Debug Info</Text>
                <Pressable onPress={()=>setModalVisible(!modalVisible)}>
                    <Text>Hide Debug Info</Text>
                </Pressable>
            </Modal>
            <Pressable onPress={()=>setModalVisible(true)}>
                <Text>Show Debug Info</Text>
            </Pressable>

            <Pressable
                onPress={()=>{
                    console.log("===========================")
                    console.log("===========================")
                    console.log("===========================")
                    console.log("DEBUG INFO:")
                    console.log("location: " + JSON.stringify(location))
                    console.log("Selected Job:" + selectedJob)
                    console.log("Is Tracking: " + isTracking)
                    console.log(JSON.stringify(realmData))
                    console.log("===========================")
                    console.log("===========================")
                    console.log("===========================")
                }}
            >
                <Text>Show Debug Info on the Console</Text>
            </Pressable>
        </View>
    )
}
const DebugInfo = withRealmData(_DebugInfo,"Job",[selectJobListUpdated],null,null)
export default DebugInfo

//the the component seperately


