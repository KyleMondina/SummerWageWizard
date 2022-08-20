import * as React from 'react'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import { View, Button, TextInput } from 'react-native';
import MAP_CONSTANTS from '../Utilities/MapConstants';
import store from '../../Redux/store';
import { updateLocation } from '../../Redux/features/locationSlice';

const BACKGROUND_LOCATION_TRACKING = "BACKGROUND_LOCATION_TRACKING "

TaskManager.defineTask(BACKGROUND_LOCATION_TRACKING, async({data,error})=>{
    if (error){
        console.error(error)
        return
    }
    if (data){
        const { locations } = data
        const location = locations[0]
        if (location){
            console.log("location updated:" + JSON.stringify(location.coords))
            store.dispatch(updateLocation({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude,
                latitudeDelta:MAP_CONSTANTS.default_latitude_delta,
                longitudeDelta:MAP_CONSTANTS.default_longitude_delta
            }))

        }
        else{
            console.log("code called from Tracker")
            console.log("error in extracting location from background")
        }
    }
})

const startBackgroundUpdate = async () => {
    await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_TRACKING,{
        accuracy: Location.Accuracy.BestForNavigation,
        showsBackgroundLocationIndicator: true,
        foregroundService: {
            notificationTitle: "Location",
            notificationBody: "Location tracking in background",
            notificationColor: "#fff",
        }
    })
}

const stopBackgroundUpdate = async () => {
    await Location.stopLocationUpdatesAsync(BACKGROUND_LOCATION_TRACKING)
    console.log("Location Tracking Stopped")
}



const Tracker = ()=>{

    return(
        <View>
                <Button title="Start Background Update" onPress = {()=>{startBackgroundUpdate()}}></Button>
                <Button title="Stop Background Update" onPress = {()=>{stopBackgroundUpdate()}}></Button>
        </View>
    )

}



export default Tracker