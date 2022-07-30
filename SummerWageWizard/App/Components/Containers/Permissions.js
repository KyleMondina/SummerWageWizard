import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';


const Permission = ()=>{
    const [forgroundPermission, setForegroundPermission] = useState(false)
    const [backgroundPermission, setBackgroundPermission] = useState(false)

    /*const requestPermissions2 = async ()=>{
        Location.getForegroundPermissionsAsync().then((foregroundStatus)=>{
            console.log(foregroundStatus)
            if (foregroundStatus.status==='granted'){
                setForegroundPermission(true)
                console.log("foreground permission granted")
                Location.getBackgroundPermissionsAsync().then((backgroundStatus)=>{
                    //console.log(backgroundStatus.toString())
                    if(backgroundStatus==='granted'){
                        setBackgroundPermission(true)
                        console.log("background permission granted")
                    }else{
                        console.log("background permission not granted")
                    }
                })
            }else{
                console.log("forground denied")
            }
        })
    }*/

    const requestPermissions = async ()=>{
        let {status} = await Location.requestForegroundPermissionsAsync()
        if (status==='granted'){
            setForegroundPermission(true)
            console.log("code called from Permissions.js line 14")
            console.log("foreground permission granted")
            let {status} = await Location.requestBackgroundPermissionsAsync()
            if(status==='granted'){
                setBackgroundPermission(true)
                console.log("code called from Permissions.js line 19")
                console.log("background permission granted")
                return
            }
            else{
                console.log("code called from Permissions.js line 23")
                console.log("background permission denied")
                return
            }
        }else{
            console.log("code called from Permissions.js line 27")
            console.log("forground permission denied")
            return
        }
    }

    useEffect(()=>{
        requestPermissions()
    },[])

    if(forgroundPermission && backgroundPermission){
        return(
            <Text>Success!</Text>
        )
    }else{
        return(
            <View>
                <Text>Forground Permission Granted: {forgroundPermission.toString()}</Text>
                <Text>Background Permission Granted: {backgroundPermission.toString()}</Text>
                <Button title="Request Permission" onPress = {()=>{requestPermissions2()}}></Button>
            </View>
        )
    }
}

export default Permission